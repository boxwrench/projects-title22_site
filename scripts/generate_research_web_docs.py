#!/usr/bin/env python3
"""Generate web-readable HTML pages for research docs and update research.json links.

Converts:
- .docx -> pages/research/web/<item-id>.html
- .md   -> pages/research/web/<item-id>.html
"""

from __future__ import annotations

import html
import json
import re
import zipfile
from pathlib import Path
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
RESEARCH_JSON = ROOT / "content" / "research.json"
WEB_DIR = ROOT / "pages" / "research" / "web"


def docx_paragraphs(docx_path: Path) -> list[str]:
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    with zipfile.ZipFile(docx_path) as zf:
        xml_bytes = zf.read("word/document.xml")
    root = ET.fromstring(xml_bytes)

    paragraphs: list[str] = []
    for p in root.findall(".//w:body/w:p", ns):
        text_parts: list[str] = []
        for node in p.iter():
            tag = node.tag.rsplit("}", 1)[-1]
            if tag == "t" and node.text:
                text_parts.append(node.text)
            elif tag == "tab":
                text_parts.append("\t")
            elif tag in {"br", "cr"}:
                text_parts.append("\n")
        text = "".join(text_parts).strip()
        if text:
            paragraphs.append(text)
    return paragraphs


def markdown_to_html(md_text: str) -> str:
    lines = md_text.splitlines()
    out: list[str] = []
    in_list = False

    def close_list() -> None:
        nonlocal in_list
        if in_list:
            out.append("</ul>")
            in_list = False

    for raw in lines:
        line = raw.rstrip()
        if not line.strip():
            close_list()
            continue

        heading = re.match(r"^(#{1,6})\s+(.*)$", line)
        if heading:
            close_list()
            level = len(heading.group(1))
            text = html.escape(heading.group(2).strip())
            out.append(f"<h{level}>{text}</h{level}>")
            continue

        bullet = re.match(r"^\s*[-*]\s+(.*)$", line)
        if bullet:
            if not in_list:
                out.append("<ul>")
                in_list = True
            out.append(f"<li>{html.escape(bullet.group(1).strip())}</li>")
            continue

        close_list()
        out.append(f"<p>{html.escape(line.strip())}</p>")

    close_list()
    return "\n".join(out)


def page_html(title: str, body_html: str, source_name: str) -> str:
    safe_title = html.escape(title)
    safe_source = html.escape(source_name)
    return f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{safe_title} | Research</title>
    <style>
      :root {{
        --ink: #182230;
        --paper: #f7f9fc;
        --card: #ffffff;
        --muted: #5d6b7b;
      }}
      html, body {{ margin: 0; padding: 0; background: var(--paper); color: var(--ink); }}
      body {{ font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif; line-height: 1.6; }}
      .wrap {{ max-width: 900px; margin: 40px auto; padding: 0 20px; }}
      .card {{ background: var(--card); border-radius: 12px; padding: 28px; box-shadow: 0 8px 24px rgba(18, 38, 63, 0.08); }}
      h1 {{ margin: 0 0 8px; line-height: 1.2; }}
      .meta {{ color: var(--muted); font-size: 0.95rem; margin-bottom: 22px; }}
      p {{ margin: 0 0 12px; }}
      ul {{ margin: 0 0 12px 20px; }}
      a {{ color: #0b5fd4; }}
    </style>
  </head>
  <body>
    <main class="wrap">
      <article class="card">
        <h1>{safe_title}</h1>
        <div class="meta">Web preview generated from: {safe_source}</div>
        {body_html}
      </article>
    </main>
  </body>
</html>
"""


def convert_item(item: dict) -> str | None:
    rel_url = item.get("url", "")
    src = ROOT / rel_url
    if not src.exists():
        return None

    ext = src.suffix.lower()
    if ext not in {".docx", ".md"}:
        return None

    WEB_DIR.mkdir(parents=True, exist_ok=True)
    out_rel = Path("pages/research/web") / f"{item['id']}.html"
    out_path = ROOT / out_rel

    if ext == ".docx":
        paragraphs = docx_paragraphs(src)
        if paragraphs:
            body = "\n".join(f"<p>{html.escape(p)}</p>" for p in paragraphs)
        else:
            body = "<p>No extractable text found in this document.</p>"
    else:
        md_text = src.read_text(encoding="utf-8", errors="replace")
        body = markdown_to_html(md_text)

    out_path.write_text(
        page_html(item.get("title", "Research Document"), body, src.name),
        encoding="utf-8",
    )
    return out_rel.as_posix()


def main() -> None:
    data = json.loads(RESEARCH_JSON.read_text(encoding="utf-8"))
    changed = 0
    for item in data.get("items", []):
        new_url = convert_item(item)
        if new_url and item.get("url") != new_url:
            item["url"] = new_url
            changed += 1

    RESEARCH_JSON.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Updated links: {changed}")


if __name__ == "__main__":
    main()

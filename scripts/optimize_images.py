"""
Image optimization script for Title 22 site.
Converts large PNGs to WebP + resized PNG fallbacks.

Usage: python scripts/optimize_images.py
Requires: pip install Pillow
"""

import os
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent

CARD_HEADERS = [
    "projects_header.png",
    "tools_header.png",
    "research_header.png",
    "writing_header.png",
    "resume_header.png",
    "overflow_header.png",
]

HERO_IMAGES = [
    "hero_background_hq_1770157778448.png",
]


def optimize_image(src: Path, dest_dir: Path, max_width: int, quality: int = 85):
    """Resize and save as WebP + PNG fallback."""
    dest_dir.mkdir(parents=True, exist_ok=True)
    stem = src.stem

    img = Image.open(src)
    print(f"  Source: {src.name} ({img.width}x{img.height}, {src.stat().st_size / 1024:.0f} KB)")

    # Resize if wider than max_width
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)
        print(f"  Resized to {max_width}x{new_height}")

    # Convert to RGB if RGBA (WebP supports alpha but PNG backgrounds don't need it)
    if img.mode == "RGBA":
        # Keep RGBA for WebP, convert for PNG
        img_rgb = Image.new("RGB", img.size, (255, 255, 255))
        img_rgb.paste(img, mask=img.split()[3])
    else:
        img_rgb = img

    # Save WebP
    webp_path = dest_dir / f"{stem}.webp"
    img.save(webp_path, "WEBP", quality=quality, method=6)
    print(f"  WebP:  {webp_path.name} ({webp_path.stat().st_size / 1024:.0f} KB)")

    # Save resized PNG fallback
    png_path = dest_dir / f"{stem}.png"
    img_rgb.save(png_path, "PNG", optimize=True)
    print(f"  PNG:   {png_path.name} ({png_path.stat().st_size / 1024:.0f} KB)")

    return webp_path, png_path


def main():
    print("=== Title 22 Image Optimization ===\n")

    # Optimize category headers (1200px wide)
    print("Category Headers (target: 1200px wide)")
    print("-" * 40)
    cards_src = ROOT / "assets" / "cards" / "full"
    cards_dest = ROOT / "assets" / "cards" / "optimized"
    for filename in CARD_HEADERS:
        src = cards_src / filename
        if src.exists():
            optimize_image(src, cards_dest, max_width=1200)
            print()
        else:
            print(f"  SKIP: {filename} not found")

    # Optimize hero background (1920px wide)
    print("\nHero Background (target: 1920px wide)")
    print("-" * 40)
    hero_src = ROOT / "assets" / "hero"
    hero_dest = ROOT / "assets" / "hero" / "optimized"
    for filename in HERO_IMAGES:
        src = hero_src / filename
        if src.exists():
            optimize_image(src, hero_dest, max_width=1920)
            print()
        else:
            print(f"  SKIP: {filename} not found")

    print("Done!")


if __name__ == "__main__":
    main()

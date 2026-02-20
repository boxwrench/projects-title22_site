# projects-title22_site

Professional portfolio and resource hub for water treatment operations.

**Live Site:** `projects.title22.org` (pending DNS)

## Structure

```
index.html          # Homepage with featured items per section
projects.html       # Full Projects archive
tools.html          # Full Tools archive
research.html       # Full Research archive
writing.html        # Full Writing archive
resume.html         # Full Resume page
```

## Sections

| Section    | Description                                      |
|------------|--------------------------------------------------|
| Projects   | Portfolio builds, simulators, and writeups       |
| Tools      | Calculators, checklists, and templates           |
| Research   | Notes on regulations, white papers, deep dives   |
| Writing    | Literary and creative perspectives on water      |
| Resume     | Professional experience and qualifications       |

## Development

- **CSS:** `css/static.css` - Clean, professional styling
- **JS:** `js/parallax.js` - Subtle parallax effects for hero/footer
- **Assets:** `assets/cards/full/` - Illustrated landscape headers

## Local Admin Workflow

- `admin.html` is intended to stay local-only and is ignored by Git.
- Start a local server when editing:
  - `./scripts/run-admin-local.sh` (default port `8787`)
  - or `./scripts/run-admin-local.sh 9000`
- Open `http://127.0.0.1:<port>/admin.html`

## Logs

- `DEVLOG.md` - Session-by-session development history
- `SITE-PLAN.md` - Design direction and content strategy

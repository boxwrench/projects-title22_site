# 🛠️ Site Maintenance Guide

This guide explains how to add and update content on your Title 22 site. **No HTML editing required!**

---

## 📁 Content Files

All your content lives in the `content/` folder as JSON files:

| File | What it controls |
|------|------------------|
| `content/projects.json` | Projects section |
| `content/tools.json` | Tools section |
| `content/research.json` | Research section |
| `content/writing.json` | Writing section |
| `content/finds.json` | Interesting Finds list |
| `content/fun.json` | Fun section list |

---

## ➕ Adding a New Project (or Tool, Research, Writing)

1. Open the JSON file (e.g., `content/projects.json`)
2. Find the `"items"` array
3. Copy an existing item and paste it at the end (before the `]`)
4. Change the values:

```json
{
  "id": "my-new-project",
  "title": "My New Project Title",
  "description": "A brief description of what this is.",
  "tag": "Simulation",
  "status": "active",
  "featured": true,
  "url": "#"
}
```

### Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| `id` | ✅ | Unique identifier (lowercase, dashes) |
| `title` | ✅ | Display title |
| `description` | ✅ | Short description (1-2 sentences) |
| `tag` | ⬜ | Category label (e.g., "Simulation", "Template", "Essay") |
| `status` | ⬜ | Status badge: "active", "build", "planned", or leave empty |
| `featured` | ✅ | `true` = shows on homepage, `false` = only on sub-page |
| `url` | ✅ | Link to the content (use "#" for placeholder) |

---

## 🌟 Featured vs. Non-Featured

- **`"featured": true`** → Item shows on the homepage AND the sub-page
- **`"featured": false`** → Item shows ONLY on the sub-page

This lets you keep your homepage clean while having a complete archive on sub-pages.

---

## 📝 Adding to Finds or Fun

These use a simpler format:

```json
{
  "id": "my-find",
  "title": "Article Title",
  "description": "Brief note about it.",
  "url": "https://example.com/article"
}
```

---

## ✏️ Editing Existing Content

Just find the item in the JSON file and change the values. Save the file.

---

## 🔄 Workflow: Adding New Content

1. Edit the appropriate JSON file in `content/`
2. Save the file
3. Commit and push to GitHub:
   ```
   git add .
   git commit -m "Add new project: Project Name"
   git push
   ```
4. Wait ~1 minute for GitHub Pages to update
5. Refresh your site to see changes

---

## ⚠️ Common Mistakes

### Missing comma
JSON needs commas between items:
```json
{
  "items": [
    { "title": "First" },   ← comma here
    { "title": "Second" }   ← NO comma on last item
  ]
}
```

### Using single quotes
JSON requires double quotes:
```json
✅ "title": "My Project"
❌ 'title': 'My Project'
```

### Trailing comma
Don't put a comma after the last item:
```json
✅ { "title": "Last Item" }
❌ { "title": "Last Item" },
```

---

## 🧪 Testing Locally

Before pushing, you can test locally:

1. Open a terminal in the project folder
2. Run a local server:
   ```
   npx serve .
   ```
3. Open `http://localhost:3000` in your browser

---

## 📂 File Structure Reference

```
projects-title22_site/
├── content/              ← Edit these to update content
│   ├── projects.json
│   ├── tools.json
│   ├── research.json
│   ├── writing.json
│   ├── finds.json
│   └── fun.json
├── index.html            ← Homepage (shows featured items)
├── projects.html         ← Projects page (shows all projects)
├── tools.html            ← Tools page (shows all tools)
├── research.html         ← Research page
├── writing.html          ← Writing page
├── resume.html           ← Resume (edit HTML directly)
├── js/
│   ├── content-loader.js ← Loads JSON and renders HTML
│   └── parallax.js       ← Visual effects
└── css/
    └── static.css        ← Styling
```

---

## 💡 Tips

- Keep descriptions short (under 100 characters works best)
- Use consistent tags across similar content
- Set new content as `featured: true` initially, then un-feature older items over time
- The `_guide` field in JSON files is just for your reference—it's ignored by the site

---

## Need Help?

If something breaks, check:
1. Is your JSON valid? (Use https://jsonlint.com/ to check)
2. Did you save the file?
3. Did you push to GitHub?
4. Check browser console (F12) for errors

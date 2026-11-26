# f6o.dev

Personal site and blog. Built with [Jekyll](https://jekyllrb.com/), which GitHub Pages compiles automatically on every push to `main`. No build step or Action needed.

## Editing content

| What | Where |
| --- | --- |
| New blog post | `_posts/YYYY-MM-DD-slug.md` |
| Projects on the home page | `_data/projects.yml` |
| About page | `about.md` |
| Home hero text | `index.html` |
| Look and feel | `styles.css` |

### New post

Create `_posts/2026-12-01-my-post.md`:

```markdown
---
layout: post
title: My post
date: 2026-12-01
description: One-line summary shown under the title.
---

Write in Markdown here.
```

Push, and it shows up on the home page and on `/blog/`. URL: `/posts/my-post/`.

### New project

Add an entry to `_data/projects.yml` (`name`, `url`, `domain`, `description`, `icon`, `tint`, `ink`). Icons live in `_includes/icon.html`.

### New page

Any `.md` file in the root with this front matter becomes a page:

```markdown
---
layout: page
title: Uses
permalink: /uses/
---
```

## Structure

```
_config.yml        site settings
_data/projects.yml projects shown on the home page
_includes/         icon and post-list partials
_layouts/          default, page, post
_posts/            blog posts (Markdown)
index.html         home
blog.html          post list
about.md           about page
styles.css         styles
CNAME              custom domain
```

## Local preview (optional)

```bash
gem install jekyll kramdown-parser-gfm webrick
jekyll serve
```

Then open http://localhost:4000.

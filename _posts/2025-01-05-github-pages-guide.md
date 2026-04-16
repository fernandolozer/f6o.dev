---
layout: post
title: Deploying to GitHub Pages
date: 2025-01-05
description: Learn how to deploy your static website to GitHub Pages for free hosting.
---

GitHub Pages is a fantastic free hosting solution for static websites. Here's a comprehensive guide to getting your site live.

## What is GitHub Pages?

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a GitHub repository and publishes them as a website.

## Step-by-Step Deployment

### 1. Create Your Repository

First, create a new repository on GitHub. For a personal site, you can name it `username.github.io` or any other name.

### 2. Add Your Files

Push your HTML, CSS, and JavaScript files to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

### 3. Enable GitHub Pages

In your repository settings:
- Go to Settings → Pages
- Under "Source", select the main branch
- Choose the root folder (or /docs if you prefer)
- Click Save

### 4. Access Your Site

After a few minutes, your site will be available at:
- `https://username.github.io` (for username.github.io repos)
- `https://username.github.io/repo-name` (for other repos)

## Custom Domains

You can also use a custom domain with GitHub Pages:
1. Add a `CNAME` file to your repository with your domain name
2. Configure your DNS settings to point to GitHub's servers
3. Enable HTTPS in the repository settings

## Tips and Best Practices

- Use relative paths for assets to ensure compatibility
- Test locally before pushing changes
- Changes may take a few minutes to propagate

## Limitations

Keep in mind GitHub Pages has some limitations:
- Only static files (no server-side code)
- 1 GB repository size limit
- 100 GB/month bandwidth soft limit
- 10 builds per hour

## Conclusion

GitHub Pages is perfect for portfolios, documentation, and blogs. It's free, reliable, and integrates seamlessly with your development workflow.

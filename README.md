# F6O.dev - Personal Site & Blog

A clean, modern personal website and blog built with vanilla HTML, CSS, and JavaScript, designed for GitHub Pages deployment.

## 🌟 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Blog System**: Simple JavaScript-based blog with multiple posts
- **Clean UI**: Modern, minimalist design with smooth transitions
- **Fast Loading**: No heavy frameworks - just pure HTML, CSS, and JavaScript
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Easy to Customize**: Clear code structure for easy modifications

## 📁 Project Structure

```
f6o.dev/
├── index.html              # Homepage
├── blog.html               # Blog listing page
├── about.html              # About page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript for blog functionality
├── posts/                  # Blog posts directory
│   ├── getting-started.html
│   ├── web-development-tips.html
│   └── github-pages-guide.html
├── .nojekyll              # Disable Jekyll processing
├── CNAME                  # Custom domain configuration (optional)
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/fernandolozer/f6o.dev.git
   cd f6o.dev
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

### Deploy to GitHub Pages

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/fernandolozer/f6o.dev.git
   git push -u origin main
   ```

2. Enable GitHub Pages:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"

3. Your site will be live at `https://fernandolozer.github.io/f6o.dev/`

### Custom Domain (Optional)

To use a custom domain:

1. Update the `CNAME` file with your domain name
2. Configure your DNS provider to point to GitHub Pages:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```
3. Enable HTTPS in repository settings

## ✍️ Adding New Blog Posts

1. Create a new HTML file in the `posts/` directory:
   ```html
   <!-- posts/my-new-post.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>My New Post</title>
       <link rel="stylesheet" href="../styles.css">
   </head>
   <body>
       <!-- Your post content -->
   </body>
   </html>
   ```

2. Add the post metadata to `script.js`:
   ```javascript
   const posts = [
       {
           id: 'my-new-post',
           title: 'My New Post Title',
           date: '2025-01-20',
           excerpt: 'A brief description of the post...',
           file: 'posts/my-new-post.html'
       },
       // ... existing posts
   ];
   ```

3. The post will automatically appear on the homepage and blog page!

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    /* ... more variables */
}
```

### Site Name

Update the logo text in all HTML files:

```html
<a href="index.html" class="logo">Your Name</a>
```

### About Page

Edit `about.html` to add your personal information, bio, and social links.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

- GitHub: [@fernandolozer](https://github.com/fernandolozer)
- Website: [f6o.dev](https://fernandolozer.github.io/f6o.dev/)

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript

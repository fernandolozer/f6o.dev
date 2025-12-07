// Blog posts data
const posts = [
    {
        id: 'getting-started',
        title: 'Getting Started with F6O.dev',
        date: '2025-01-15',
        excerpt: 'Welcome to my new blog! This is the first post where I share my journey of creating this personal site.',
        file: 'posts/getting-started.html'
    },
    {
        id: 'web-development-tips',
        title: 'Web Development Best Practices',
        date: '2025-01-10',
        excerpt: 'A collection of web development tips and best practices I\'ve learned over the years.',
        file: 'posts/web-development-tips.html'
    },
    {
        id: 'github-pages-guide',
        title: 'Deploying to GitHub Pages',
        date: '2025-01-05',
        excerpt: 'Learn how to deploy your static website to GitHub Pages for free hosting.',
        file: 'posts/github-pages-guide.html'
    }
];

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Create post card HTML
function createPostCard(post) {
    return `
        <div class="post-card" onclick="window.location.href='${post.file}'">
            <h3>${post.title}</h3>
            <p class="post-meta">${formatDate(post.date)}</p>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="${post.file}" class="post-link">Read more →</a>
        </div>
    `;
}

// Load latest posts on homepage
function loadLatestPosts() {
    const container = document.getElementById('latest-posts');
    if (!container) return;

    // Sort posts by date (newest first) and take top 3
    const latestPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);

    container.innerHTML = latestPosts.map(post => createPostCard(post)).join('');
}

// Load all posts on blog page
function loadAllPosts() {
    const container = document.getElementById('all-posts');
    if (!container) return;

    // Sort posts by date (newest first)
    const sortedPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = sortedPosts.map(post => createPostCard(post)).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadLatestPosts();
    loadAllPosts();
});

// Load archive content without page refresh
document.querySelectorAll('.file-tree a').forEach(link => {
  link.addEventListener('click', async (e) => {
    e.preventDefault();
    const path = e.target.getAttribute('href');
    
    try {
      const response = await fetch(`https://sexynos990.github.io/backups/${path}`);
      if (!response.ok) throw new Error('Failed to load');
      const html = await response.text();
      
      document.getElementById('archive-viewer').innerHTML = `
        <div class="archive-frame">
          ${html}
          <div class="archive-meta">
            > Archived from: /backups/${path}_
          </div>
        </div>
      `;
    } catch (error) {
      document.getElementById('archive-viewer').innerHTML = `
        <pre><code>ERROR: Archive not accessible.
        
Check the <a href="https://github.com/sexynos990/exynos-news/tree/main/backups/${path}" target="_blank">repository</a> directly.</code></pre>
      `;
    }
  });
});

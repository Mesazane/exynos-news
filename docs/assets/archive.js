// Run this monthly to move old content
function archiveOldPosts() {
  const cutoff = new Date();
  cutoff.setFullYear(cutoff.getFullYear() - 1); // 1 year threshold

  document.querySelectorAll('.post').forEach(post => {
    const dateStr = post.querySelector('p')?.textContent.match(/\d{4}-\d{2}-\d{2}/)?.[0];
    if (!dateStr) return;
    
    const postDate = new Date(dateStr);
    if (postDate < cutoff) {
      const year = postDate.getFullYear();
      const fileName = post.querySelector('h2').textContent.replace(/>|_/g, '').trim().toLowerCase().replace(/\s+/g, '-');
      
      // Create archive structure (manually implement or use GitHub API)
      console.log(`Move to: /archive/${year}/${fileName}.html`);
    }
  });
}
// Call this manually when needed
archiveOldPosts();

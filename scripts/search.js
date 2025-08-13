document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-container');
  const searchInput = document.querySelector('.search-input');
  const iconContainer = document.querySelector('.icones');
  const items = iconContainer.querySelectorAll('div');
  let noResultEl;

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const term = searchInput.value.trim().toLowerCase();
    let matches = 0;

    items.forEach((item) => {
      const text = item.querySelector('p').textContent.toLowerCase();
      if (text.includes(term) || term === '') {
        item.style.display = '';
        matches++;
      } else {
        item.style.display = 'none';
      }
    });

    if (matches === 0) {
      if (!noResultEl) {
        noResultEl = document.createElement('p');
        noResultEl.className = 'no-results';
        noResultEl.textContent = 'nenhum resultado';
        iconContainer.appendChild(noResultEl);
      } else {
        noResultEl.style.display = '';
      }
    } else if (noResultEl) {
      noResultEl.style.display = 'none';
    }
  });
});

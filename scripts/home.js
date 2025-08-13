document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.barra');
  const sideMenu = document.getElementById('side-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const supportIcon = document.querySelector('.fone');

  if (menuButton && sideMenu && menuOverlay) {
    const toggleMenu = () => {
      sideMenu.classList.toggle('open');
      menuOverlay.classList.toggle('show');
    };
    menuButton.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);
  }

  if (supportIcon) {
    supportIcon.addEventListener('click', () => {
      window.location.href = 'mailto:suporte@facin.com';
    });
  }
  // Map icons to their target pages
  const iconRoutes = {
    '.icone_servico': 'servicos.html',
    '.icone_farmacia': 'farmacia.html'
  };

  Object.entries(iconRoutes).forEach(([selector, url]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener('click', () => {
        window.location.href = url;
      });
    }
  });

  // Mock data for search results
  const data = [
    { name: 'Serviços', page: 'servicos.html' },
    { name: 'Farmácia', page: 'farmacia.html' },
    { name: 'Supermercado', page: 'supermercado.html' }
  ];

  const input = document.querySelector('.search-input');
  const button = document.querySelector('.search-button');
  const resultsContainer = document.querySelector('.search-results');

  function renderResults(results) {
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
      resultsContainer.textContent = 'Nenhum resultado encontrado.';
      return;
    }

    const list = document.createElement('ul');
    results.forEach(item => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.textContent = item.name;
      link.href = item.page;
      li.appendChild(link);
      list.appendChild(li);
    });
    resultsContainer.appendChild(list);
  }

  function handleSearch() {
    const query = input.value.trim().toLowerCase();
    const results = data.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    renderResults(results);
  }

  button.addEventListener('click', handleSearch);
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });
});

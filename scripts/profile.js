document.addEventListener('DOMContentLoaded', () => {
  const userJSON = localStorage.getItem('loggedUser');
  if (!userJSON) {
    window.location.href = 'login.html';
    return;
  }

  const user = JSON.parse(userJSON);
  const nameEl = document.querySelector('.logo-usuario__nome');
  if (nameEl && user.nome) {
    nameEl.textContent = `olá, ${user.nome}`;
  }
});

  const logoutBtn = document.getElementById('logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('loggedUser');
      window.location.href = 'index.html';
    });
  }

  const darkToggle = document.getElementById('dark-mode-toggle');
  if (darkToggle) {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
  }
});

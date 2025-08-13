// Manipula login e criação de conta

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#nome') ? document.querySelector('.facin-form__princial') : null;
  const loginForm = document.querySelector('#email') && !document.querySelector('#nome') ? document.querySelector('.facin-form__princial') : null;

  // Cadastro de usuário
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ nome, email, senha });
      localStorage.setItem('users', JSON.stringify(users));

      window.location.href = 'login.html';
    });
  }

  // Login de usuário
  if (loginForm) {
    const errorEl = document.createElement('p');
    errorEl.style.color = 'red';
    loginForm.parentNode.appendChild(errorEl);

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((u) => u.email === email && u.senha === senha);

      if (user) {
        window.location.href = 'perfil.html';
      } else {
        errorEl.textContent = 'E-mail ou senha incorretos.';
      }
    });
  }
});

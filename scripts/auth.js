// Manipula login e criação de conta

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#nome') ? document.querySelector('.facin-form__princial') : null;
  const loginForm = document.querySelector('#email') && !document.querySelector('#nome') ? document.querySelector('.facin-form__princial') : null;

  async function hashPassword(password) {
    const data = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  // Cadastro de usuário
  if (signupForm) {
    const errorEl = document.createElement('p');
    errorEl.style.color = 'red';
    signupForm.parentNode.appendChild(errorEl);

    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.some((u) => u.email === email)) {
        errorEl.textContent = 'E-mail já cadastrado.';
        return;
      }

      const senhaHash = await hashPassword(senha);
      users.push({ nome, email, senha: senhaHash });
      localStorage.setItem('users', JSON.stringify(users));

      window.location.href = 'login.html';
    });
  }

  // Login de usuário
  if (loginForm) {
    const errorEl = document.createElement('p');
    errorEl.style.color = 'red';
    loginForm.parentNode.appendChild(errorEl);

    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const senhaHash = await hashPassword(senha);
      const user = users.find((u) => u.email === email && u.senha === senhaHash);
      if (user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        window.location.href = 'perfil.html';
      } else {
        errorEl.textContent = 'E-mail ou senha incorretos.';
      }
    });
  }
});

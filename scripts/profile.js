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

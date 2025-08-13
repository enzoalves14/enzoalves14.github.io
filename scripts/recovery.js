// Script de recuperação de conta
// Intercepta formulários de recuperação e gera um código armazenado no localStorage

function generateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form.facin-form__princial');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const code = generateCode();
      localStorage.setItem('recoveryCode', code);
      alert('Um código de recuperação foi enviado.');
      window.location.href = 'redefinir-senha.html';
    });
  }

  const recoveryForm = document.querySelector('form.recovery-verify');
  if (recoveryForm) {
    recoveryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const codeInput = document.getElementById('codigo');
      const newPassword = document.getElementById('nova-senha');
      const confirmPassword = document.getElementById('confirmar-senha');
      const storedCode = localStorage.getItem('recoveryCode');

      if (codeInput.value === storedCode && newPassword.value === confirmPassword.value) {
        localStorage.removeItem('recoveryCode');
        alert('Senha redefinida com sucesso!');
        window.location.href = 'login.html';
      } else {
        alert('Código inválido ou senhas não coincidem.');
      }
    });
  }
});

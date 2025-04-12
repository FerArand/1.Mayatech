document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Registro exitoso. ¡Ahora puedes iniciar sesión!');
    window.location.href = 'Sesion.html';
  });

  function volverAPaginaPrincipal() {
    window.location.href = 'Principal.html';
}
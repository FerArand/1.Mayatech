document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "admin@example.com" && password === "12345") {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loggedInUser', 'Administrador');
      alert('Inicio de sesión exitoso. ¡Bienvenido Administrador!');
      window.location.href = 'Principal_Admi.html';
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  });

  function abrirPaginaUsuario() {
    window.open('Sesion.html', '_blank'); // Redirige a la página de usuario en una nueva pestaña
  }
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('loggedInUser', user.name);
      alert('Inicio de sesión exitoso. ¡Bienvenido ' + user.name + '!');
      window.location.href = 'Principal.html';
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  });

  function abrirPaginaAdmin() {
    window.open('Sesion_Admi.html', '_blank'); // Redirige a la página de admin en una nueva pestaña
  }
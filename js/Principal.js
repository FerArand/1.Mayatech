// Mostrar mensaje de bienvenida si el usuario ha iniciado sesión
document.addEventListener('DOMContentLoaded', function() {
    const loggedIn = localStorage.getItem('loggedIn');
    const userName = localStorage.getItem('loggedInUser');
    if (loggedIn === 'true' && userName) {
      const welcomeMessage = document.getElementById('welcome-message');
      welcomeMessage.innerText = `¡Bienvenido, ${userName}!`;
    }
  });

  function toggleMenu() {
    const nav = document.querySelector('.navigation');
    nav.classList.toggle('active');
  }  

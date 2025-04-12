function enableEditMode() {
    const content = document.querySelector('.about-content');
    content.contentEditable = true;
    content.focus();
    document.querySelector('.save-button').style.display = 'block';
    document.querySelector('.edit-button').style.display = 'none';
  }

  function saveChanges() {
    const content = document.querySelector('.about-content');
    localStorage.setItem('aboutContent', content.innerHTML); // Guardar cambios en localStorage
    content.contentEditable = false;
    document.querySelector('.save-button').style.display = 'none';
    document.querySelector('.edit-button').style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const savedContent = localStorage.getItem('aboutContent');
    if (savedContent) {
      document.querySelector('.about-content').innerHTML = savedContent; // Cargar contenido guardado
    }
  });
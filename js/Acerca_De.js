document.addEventListener('DOMContentLoaded', function() {
    const savedContent = localStorage.getItem('aboutContent');
    if (savedContent) {
      document.querySelector('.about-content').innerHTML = savedContent; // Cargar contenido guardado
    }
  });

  function abrirConsultaModal() {
    document.getElementById("modalConsulta").style.display = "block";
  }

  function cerrarConsultaModal() {
    document.getElementById("modalConsulta").style.display = "none";
  }

  function enviarConsultaPorCorreo(event) {
    event.preventDefault();
    
    const usuario = document.getElementById("usuario").value;
    const descripcion = document.getElementById("descripcion").value;

    const correoDestino = "soporte@dreamsandprints.com";
    const asunto = encodeURIComponent("Consulta de usuario: " + usuario);
    const cuerpo = encodeURIComponent("Usuario: " + usuario + "\n\nDescripción:\n" + descripcion);

    window.location.href = `mailto:${correoDestino}?subject=${asunto}&body=${cuerpo}`;

    cerrarConsultaModal();
  }
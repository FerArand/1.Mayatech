let ideas = [];

    function abrirModal(id) {
      document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
      document.getElementById(id).style.display = 'flex';
    }

    window.onclick = function (event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
      }
    }

    function cerrarModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    function buscarIdea() {
      const titulo = document.getElementById('buscarTitulo').value.trim().toLowerCase();
      const categoria = document.getElementById('buscarCategoria').value.trim().toLowerCase();

      const resultados = ideas.filter(idea =>
        (!titulo || idea.titulo.toLowerCase().includes(titulo)) &&
        (!categoria || idea.categoria.toLowerCase().includes(categoria))
      );

      mostrarIdeas(resultados);
      cerrarModal('modalBuscar');
    }

    function eliminarIdea() {
      const tituloEliminar = document.getElementById('tituloEliminar').value.trim().toLowerCase();
      ideas = ideas.filter(idea => idea.titulo.toLowerCase() !== tituloEliminar);
      mostrarIdeas(ideas);
      cerrarModal('modalEliminar');
    }

    function mostrarIdeas(lista) {
      const contenedor = document.getElementById('ideas-contenedor');
      contenedor.innerHTML = '';
      if (lista.length === 0) {
        contenedor.innerHTML = '<p>No hay ideas para mostrar.</p>';
        return;
      }
      lista.forEach(idea => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        card.innerHTML = `
          ${idea.imagen ? `<img src="${idea.imagen}">` : ''}
          <h4>${idea.titulo}</h4>
          <p>${idea.descripcion}</p>
          <small><strong>Categoría:</strong> ${idea.categoria}</small>
        `;
        contenedor.appendChild(card);
      });
    }
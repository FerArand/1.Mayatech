function editProduct(id) {
    const item = document.getElementById(id);
    const title = item.querySelector('h2').textContent;
    const description = item.querySelector('p').textContent;
    const newTitle = prompt('Editar título:', title);
    const newDescription = prompt('Editar descripción:', description);
    if (newTitle && newDescription) {
      item.querySelector('h2').textContent = newTitle;
      item.querySelector('p').textContent = newDescription;
    }
  }

  function deleteProduct(id) {
    const item = document.getElementById(id);
    item.remove();
  }

  function addProduct() {
    const catalogList = document.getElementById('catalog-list');
    const newId = `catalog-item-${catalogList.children.length + 1}`;
    const newTitle = prompt('Título del producto:');
    const newDescription = prompt('Descripción del producto:');
    const newImage = prompt('URL de la imagen del producto:');
    if (newTitle && newDescription && newImage) {
      const newItem = document.createElement('div');
      newItem.className = 'catalog-item';
      newItem.id = newId;
      newItem.innerHTML = `
        <img src="${newImage}" alt="${newTitle}">
        <div class="catalog-info">
          <h2>${newTitle}</h2>
          <p>${newDescription}</p>
          <div class="action-buttons">
            <button class="edit-btn" onclick="editProduct('${newId}')">Editar</button>
            <button class="delete-btn" onclick="deleteProduct('${newId}')">Eliminar</button>
          </div>
        </div>
      `;
      catalogList.appendChild(newItem);
    }
  }

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
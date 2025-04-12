let carrito = [];
    let carritoVisible = false;
    let precioFinal = 0;
    let stock = {
      'Mano': 11,
      'Barco': 12,
      'Cara': 13,
      'Mascara': 14
    };


    function cerrarConfiguracion() {
      document.getElementById('configModal').style.display = 'none';
    }

    function toggleCarrito() {
      const carrito = document.getElementById('carrito');
      carritoVisible = !carritoVisible;
      carrito.classList.toggle('oculto', !carritoVisible);
    }

    function actualizarPrecio() {
      let total = 0;
      const producto = document.getElementById('producto');
      const dimension = document.getElementById('dimension');
      const material = document.getElementById('material');

      if (producto && producto.selectedOptions[0].dataset.precio) {
        total += parseFloat(producto.selectedOptions[0].dataset.precio);
      }
      if (dimension && dimension.selectedOptions[0].dataset.precio) {
        total += parseFloat(dimension.selectedOptions[0].dataset.precio);
      }
      if (material && material.selectedOptions[0].dataset.precio) {
        total += parseFloat(material.selectedOptions[0].dataset.precio);
      }

      precioFinal = total;
      document.getElementById('precio').innerText = "Precio: $" + total.toFixed(2);
    }

    function guardarConfiguracion() {
      const nombre = document.getElementById('producto').value;
      const dimension = document.getElementById('dimension').value;
      const material = document.getElementById('material').value;
      const color = document.getElementById('color').value;

      if (!nombre || !dimension || !material || !color) {
        alert("Por favor completa todos los campos.");
        return;
      }

      if (stock[nombre] <= 0) {
        alert("No hay suficiente stock para este producto.");
        return;
      }

      const item = {
        id: Date.now(),
        nombre,
        dimension,
        material,
        color,
        precio: precioFinal
      };

      carrito.push(item);
      stock[nombre]--;
      actualizarStockVisual(nombre);
      actualizarCarrito();
      cerrarConfiguracion();
    }

    function actualizarCarrito() {
      const lista = document.getElementById('listaCarrito');
      lista.innerHTML = '';
      let total = 0;

      carrito.forEach((item, index) => {
        total += item.precio;
        const li = document.createElement('li');
        li.innerHTML = `
      <strong>${item.nombre}</strong><br>
      Dimensiones: ${item.dimension}, Material: ${item.material}, Color: ${item.color}<br>
      Precio: $${item.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
        lista.appendChild(li);
      });

      document.getElementById('totalCarrito').innerText = total.toFixed(2);
      document.getElementById('carrito-count').innerText = carrito.length;
    }

    function eliminarDelCarrito(index) {
      const producto = carrito[index].nombre;
      stock[producto]++;
      actualizarStockVisual(producto);
      carrito.splice(index, 1);
      actualizarCarrito();
    }

    function actualizarStockVisual(producto) {
      const items = document.querySelectorAll(`.catalog-item`);
      items.forEach(item => {
        if (item.innerHTML.includes(`<h2>${producto}</h2>`)) {
          const stockParrafo = item.querySelector('p:nth-of-type(3)');
          if (stockParrafo) {
            stockParrafo.innerHTML = `<strong>Stock:</strong> ${stock[producto]} unidades`;
          }
        }
      });
    }

    function abrirConfiguracion(nombreProducto) {
      document.getElementById('producto').value = nombreProducto;
      document.getElementById('producto').disabled = true;

      document.getElementById('dimension').value = "";
      document.getElementById('material').value = "";
      document.getElementById('color').value = "";
      document.getElementById('precio').innerText = "Precio: $0.00";
      document.getElementById('configModal').style.display = 'block';
    }
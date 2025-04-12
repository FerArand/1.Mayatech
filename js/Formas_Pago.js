function guardarDatosPago() {
    const nombre = document.getElementById('nombre').value;
    const numeroTarjeta = document.getElementById('numeroTarjeta').value;
          const fechaExpiracion = document.getElementById('fechaExpiracion').value;
    const codigoSeguridad = document.getElementById('codigoSeguridad').value;

    // Verificación de tipo
    const nombreRegex = /^[a-zA-Z\s]+$/;
    const numeroRegex = /^[0-9]{16}$/;
    const fechaRegex = /^[0-9]{2}\/[0-9]{2}$/;
    const cvvRegex = /^[0-9]{3}$/;

    if (!nombreRegex.test(nombre)) {
      alert("El nombre solo debe contener letras.");
      return;
    }
    if (!numeroRegex.test(numeroTarjeta)) {
      alert("El número de tarjeta debe tener 16 dígitos.");
      return;
    }
    if (!fechaRegex.test(fechaExpiracion)) {
      alert("La fecha de expiración debe tener el formato MM/AA.");
      return;
    }
    if (!cvvRegex.test(codigoSeguridad)) {
      alert("El código de seguridad (CVV) debe ser de 3 dígitos.");
      return;
    }

    const datosPago = { nombre, numeroTarjeta, fechaExpiracion, codigoSeguridad };
    let tarjetasGuardadas = JSON.parse(localStorage.getItem('tarjetasGuardadas')) || [];

    tarjetasGuardadas.push(datosPago);
    localStorage.setItem('tarjetasGuardadas', JSON.stringify(tarjetasGuardadas));
    mostrarTarjetasGuardadas();
  }

  function mostrarTarjetasGuardadas() {
    const tarjetasGuardadas = JSON.parse(localStorage.getItem('tarjetasGuardadas')) || [];
    const tarjetasList = document.getElementById('tarjetasList');
    tarjetasList.innerHTML = '';

    tarjetasGuardadas.forEach((tarjeta, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${tarjeta.nombre}</strong><br>
        Tarjeta terminada en ${tarjeta.numeroTarjeta.slice(-4)}<br>
        Expira: ${tarjeta.fechaExpiracion}<br>
        <button onclick="eliminarTarjeta(${index})">Eliminar</button>
      `;
      tarjetasList.appendChild(li);
    });
  }

  function eliminarTarjeta(index) {
    let tarjetasGuardadas = JSON.parse(localStorage.getItem('tarjetasGuardadas')) || [];
    tarjetasGuardadas.splice(index, 1);
    localStorage.setItem('tarjetasGuardadas', JSON.stringify(tarjetasGuardadas));
    mostrarTarjetasGuardadas();
  }

  document.addEventListener('DOMContentLoaded', mostrarTarjetasGuardadas);
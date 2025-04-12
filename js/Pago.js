// Cambiar método de pago
let metodoActual = 'tarjeta';

function cambiarMetodo() {
    const tarjeta = document.getElementById('metodo-tarjeta');
    const efectivo = document.getElementById('metodo-efectivo');

    if (metodoActual === 'tarjeta') {
        tarjeta.classList.add('hidden');
        efectivo.classList.remove('hidden');
        metodoActual = 'efectivo';
    } else {
        tarjeta.classList.remove('hidden');
        efectivo.classList.add('hidden');
        metodoActual = 'tarjeta';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);

    // Mostrar detalles
    const detalles = document.getElementById("detalles-compra");
    detalles.innerHTML = "<h3>Detalles de la compra:</h3><ul>" +
        carrito.map(item =>
            `<li><strong>${item.nombre}</strong> - ${item.dimension}, ${item.material}, ${item.color} - $${item.precio.toFixed(2)}</li>`
        ).join("") + "</ul>";

    // Mostrar total
    document.getElementById("monto-a-pagar").innerHTML = "<h3>Total a pagar: $" + total.toFixed(2) + "</h3>";

    // Mostrar código de barras solo si es efectivo
    const efectivoDiv = document.getElementById("metodo-efectivo");
    const barra = document.getElementById("codigo-barras");
    if (!efectivoDiv.classList.contains("hidden")) {
        barra.classList.remove("hidden");
    }

    // Mostrar tarjetas guardadas
    const tarjetas = JSON.parse(localStorage.getItem("tarjetasGuardadas")) || [];
    if (tarjetas.length > 0) {
        const tarjetaForm = document.querySelector("#metodo-tarjeta .form");
        const selector = document.createElement("select");
        selector.innerHTML = '<option disabled selected>Selecciona una tarjeta guardada</option>' +
            tarjetas.map(t => `<option>${t.nombre} - ****${t.numeroTarjeta.slice(-4)}</option>`).join("");
        tarjetaForm.insertBefore(selector, tarjetaForm.firstChild);
    }
});

function cambiarMetodo() {
    const tarjeta = document.getElementById('metodo-tarjeta');
    const efectivo = document.getElementById('metodo-efectivo');
    const barra = document.getElementById("codigo-barras");

    if (tarjeta.classList.contains('hidden')) {
        tarjeta.classList.remove('hidden');
        efectivo.classList.add('hidden');
        barra.classList.add('hidden');
    } else {
        tarjeta.classList.add('hidden');
        efectivo.classList.remove('hidden');
        barra.classList.remove('hidden');
    }
}

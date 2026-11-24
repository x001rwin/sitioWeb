let btnMilanesa = document.querySelector("#btn-milanesa");
let btnBistec = document.querySelector("#btn-bistec");
let btnVaciar = document.querySelector("#btn-vaciar");

let listaOrden = document.querySelector("#lista-orden");
let totalOrden = document.querySelector("#total-orden");

let total = 0;

if (btnMilanesa) {
    btnMilanesa.addEventListener("click", () => {
        listaOrden.innerHTML += `<li>Torta de Milanesa - $30</li>`;
        total = total + 30;
        totalOrden.textContent = total;
    });
}

if (btnBistec) {
    btnBistec.addEventListener("click", () => {
        listaOrden.innerHTML += `<li>Torta de Bistec - $30</li>`;
        total = total + 30;
        totalOrden.textContent = total;
    });
}

if (btnVaciar) {
    btnVaciar.addEventListener("click", () => {
        listaOrden.innerHTML = "";
        total = 0;
        totalOrden.textContent = total;
    });
}

let formulario = document.querySelector("#formulario-pedido");
let campoCliente = document.querySelector("#cliente");
let campoIndicaciones = document.querySelector("#indicaciones");
let ticket = document.querySelector("#ticket-confirmacion");

if (formulario) {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let nombre = campoCliente.value;
        let indicaciones = campoIndicaciones.value;

        if (total == 0) {
            ticket.innerHTML = `<p>Por favor agrega al menos una torta.</p>`;
            ticket.style.color = "red";
        } else {
            ticket.innerHTML = `
                <h3>¡Orden confirmada!</h3>
                <p>Cliente: ${nombre}</p>
                <p>Indicaciones: ${indicaciones}</p>
                <p>Total a pagar: $${total}</p>
            `;
            ticket.style.color = "green";

            campoCliente.value = "";
            campoIndicaciones.value = "";
        }
    });
}
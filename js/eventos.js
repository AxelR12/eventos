const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Comidas del Peru";
    setTimeout(function(){
        subtitle2.textContent = "Si es rico o no";
    }, 1000);
}, 1000);

// Lista de platos peruanos con indicación de si son "ricos" o no
const platosPeruanos = [
    { nombre: "Ceviche", esRico: true },
    { nombre: "Lomo Saltado", esRico: true },
    { nombre: "Causa Rellena", esRico: true },
    { nombre: "Anticuchos", esRico: true },
    { nombre: "Rocoto Relleno", esRico: false },
    { nombre: "Adobo de Cerdo", esRico: false },
    { nombre: "Aji de Gallina", esRico: true },
    { nombre: "Tacu Tacu", esRico: true },
    { nombre: "Papa a la Huancaína", esRico: true },
    { nombre: "Arroz con Pato", esRico: false },
    { nombre: "Parihuela", esRico: true },
    { nombre: "Chupe de Camarones", esRico: true },
    { nombre: "Picarones", esRico: true },
    { nombre: "Suspiro a la Limeña", esRico: true },
    { nombre: "Mazamorra Morada", esRico: true }
];

// Función para mostrar los platos peruanos y si son "ricos" o no
function mostrarPlatosPeruanos() {
    const presidentsContainer = document.getElementById("presidents");

    platosPeruanos.forEach(plato => {
        const presidenteElement = document.createElement("div");
        presidenteElement.classList.add("presidente");

        const iconElement = document.createElement("div");
        iconElement.classList.add("icon");
        iconElement.classList.add(plato.esRico ? "icon-no-corrupto" : "icon-corrupto");

        const dataElement = document.createElement("div");
        dataElement.classList.add("data");

        const nombreElement = document.createElement("h4");
        nombreElement.textContent = plato.nombre;

        const riquezaElement = document.createElement("p");
        riquezaElement.textContent = plato.esRico ? "¡Es Rico!" : "No es Rico :(";
        riquezaElement.classList.add(plato.esRico ? "rico" : "no-rico");

        dataElement.appendChild(nombreElement);
        dataElement.appendChild(riquezaElement);

        presidenteElement.appendChild(iconElement);
        presidenteElement.appendChild(dataElement);

        presidentsContainer.appendChild(presidenteElement);
    });
}

// Llamar a la función para mostrar los platos peruanos
mostrarPlatosPeruanos();

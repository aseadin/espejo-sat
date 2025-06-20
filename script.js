// Datos simulados para características fiscales
const caracteristicasFiscales = {
  "Régimen": "General de Ley Personas Morales",
  "Fecha de alta": "15-03-1995"
};

// Función para mostrar los datos en la página
function mostrarCaracteristicasFiscales() {
  const regimenElem = document.getElementById("regimen");
  const fechaAltaElem = document.getElementById("fechaAlta");

  if (regimenElem && fechaAltaElem) {
    regimenElem.textContent = caracteristicasFiscales["Régimen"];
    fechaAltaElem.textContent = caracteristicasFiscales["Fecha de alta"];
  }
}

document.addEventListener("DOMContentLoaded", mostrarCaracteristicasFiscales);
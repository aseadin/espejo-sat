// Datos fijos para rellenar las listas
const datosIdentificacion = [
  "CURP: ZAOR611018HDFVLF05",
  "Nombre: RAFAEL",
  "Apellido Paterno: ZAVALA",
  "Apellido Materno: OLIVARES",
  "Fecha Nacimiento: 18-10-1961",
  "Fecha de Inicio de Operaciones: 20-08-1980",
  "Situación del contribuyente: REACTIVADO",
  "Fecha del último cambio de situación: 2025-06-20"
];

const datosUbicacion = [
  "Entidad Federativa: CIUDAD DE MEXICO",
  "Municipio o delegación: CUAUHTEMOC",
  "Colonia: OBRERA",
  "Tipo de vialidad:",
  "Nombre de la vialidad: M JOSE OTHON",
  "Número exterior: 95",
  "Número interior:",
  "CP: 06800",
  "Correo electrónico:",
  "AL: CIUDAD DE MEXICO 2"
];

const caracteristicasFiscales = [
  "Régimen: Régimen de Personas Físicas con Actividad Empresarial",
  "Fecha de alta: 2025-06-20"
];

// Función para rellenar listas
function insertarDatos(idElemento, datos) {
  const ul = document.getElementById(idElemento);
  datos.forEach(texto => {
    const li = document.createElement("li");
    li.textContent = texto;
    ul.appendChild(li);
  });
}

// Insertamos datos
insertarDatos("identificacion", datosIdentificacion);
insertarDatos("ubicacion", datosUbicacion);
insertarDatos("caracteristicas", caracteristicasFiscales);

// Modificamos el enlace dinámicamente
const linkValidar = document.getElementById("link-validar");
linkValidar.href = "https://siat.sat.gob.mx/app/qr/faces/pages/mobile/validadorqr.jsf?D1=10&D2=1&D3=15050243729_ZAOR611018DG02";
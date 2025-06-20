// Datos para mostrar en tabla en formato clave: valor
const datosIdentificacion = {
  "CURP": "ZAOR611018HDFVLF05",
  "Nombre": "RAFAEL",
  "Apellido Paterno": "ZAVALA",
  "Apellido Materno": "OLIVARES",
  "Fecha Nacimiento": "18-10-1961",
  "Fecha de Inicio de operaciones": "20-08-1980",
  "Situación del contribuyente": "REACTIVADO",
  "Fecha del último cambio de situación": "01-01-2018"
};

const datosUbicacion = {
  "Entidad Federativa": "CIUDAD DE MEXICO",
  "Municipio o delegación": "CUAUHTEMOC",
  "Colonia": "OBRERA",
  "Tipo de vialidad": "",
  "Nombre de la vialidad": "M JOSE OTHON",
  "Número exterior": "95",
  "Número interior": "",
  "CP": "06800",
  "Correo electrónico": "",
  "AL": "CIUDAD DE MEXICO 2"
};

const caracteristicasFiscales = {
  const caracteristicasFiscales = {
  "Régimen": "Régimen de Personas Físicas con Actividad Empresarial",
  "Fecha de alta": "2025-06-20"
};
};

// Función para llenar tablas con los datos
function llenarTabla(idElemento, datos) {
  const tbody = document.getElementById(idElemento);
  for (const [clave, valor] of Object.entries(datos)) {
    const row = document.createElement("tr");
    const tdClave = document.createElement("td");
    const tdValor = document.createElement("td");
    tdClave.textContent = clave + ":";
    tdValor.textContent = valor;
    row.appendChild(tdClave);
    row.appendChild(tdValor);
    tbody.appendChild(row);
  }
}

// Insertar datos en las tablas
llenarTabla("identificacion", datosIdentificacion);
llenarTabla("ubicacion", datosUbicacion);
llenarTabla("caracteristicas", caracteristicasFiscales);

// Establecer enlace con parámetro D3 modificado
const linkValidar = document.getElementById("link-validar");
linkValidar.href = "https://siat.sat.gob.mx/app/qr/faces/pages/mobile/validadorqr.jsf?D1=10&D2=1&D3=15050243729_ZAOR611018DG02";
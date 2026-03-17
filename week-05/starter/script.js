// =========================================
// PROYECTO SEMANA 05
// Clasificador — Sistema de Trazabilidad Agrícola
// =========================================


// ===============================
// DATOS DEL LOTE AGRÍCOLA
// ===============================

const cropName = "Lote de Café Orgánico"
const productionKg = 7500
const maxCapacity = 10000
const category = "exportación"
const traceCode = "AGR-9021"

// objeto anidado (para optional chaining)
const farm = {
    name: "Finca El Paraíso",
    location: {
        city: "Huila"
    }
}

// valor opcional (puede ser null)
const inspector = null



// ===============================
// CLASIFICACIÓN CON IF / ELSE
// ===============================

let productionLevel = ""

if (productionKg >= 8000) {
    productionLevel = "Alta producción"
} else if (productionKg >= 4000) {
    productionLevel = "Producción media"
} else {
    productionLevel = "Baja producción"
}



// ===============================
// ESTADO CON OPERADOR TERNARIO
// ===============================

// si supera la mitad de la capacidad → disponible para exportar
const exportStatus = productionKg >= (maxCapacity / 2)
    ? "Disponible para exportación"
    : "No apto para exportación"



// ===============================
// CLASIFICACIÓN CON SWITCH
// ===============================

let categoryType = ""

switch (category) {
    case "exportación":
        categoryType = "Producto destinado a mercado internacional"
        break

    case "consumo interno":
        categoryType = "Producto para mercado local"
        break

    default:
        categoryType = "Categoría no definida"
}



// ===============================
// NULLISH COALESCING (??)
// ===============================

const inspectorName = inspector ?? "No asignado"



// ===============================
// OPTIONAL CHAINING (?.)
// ===============================

const farmCity = farm.location?.city ?? "Ubicación no disponible"



// ===============================
// SALIDA FINAL (FICHA)
// ===============================

console.log(`
==============================================
   SISTEMA DE TRAZABILIDAD AGRÍCOLA
==============================================

Cultivo:           ${cropName}
Código:            ${traceCode}
Producción (kg):   ${productionKg}
Capacidad Máxima:  ${maxCapacity}

--- Clasificación ---
Nivel de producción: ${productionLevel}
Estado:              ${exportStatus}
Tipo:                ${categoryType}

--- Información adicional ---
Finca:        ${farm.name}
Ubicación:    ${farmCity}
Inspector:    ${inspectorName}

==============================================
`)
// ======================================
// SISTEMA DE TRAZABILIDAD AGRÍCOLA
// FICHA DE DATOS DEL DOMINIO
// ======================================

// Variables principales del dominio
const cropBatchName = "Lote Maíz Amarillo";
const productionKg = 12_500;
const isCertifiedOrganic = true;
const currentInspector = null;

// ===========================
// FICHA DE DATOS
// ===========================

console.log("===============================");
console.log("FICHA DE DATOS: TRAZABILIDAD AGRÍCOLA");
console.log("===============================");

console.log("Nombre del lote:", cropBatchName);
console.log("Producción estimada:", productionKg, "kg");
console.log("Certificación orgánica:", isCertifiedOrganic);

// ===========================
// TIPOS DE DATOS
// ===========================

console.log("\n--- Tipos de datos ---");

console.log("typeof cropBatchName:", typeof cropBatchName);
console.log("typeof productionKg:", typeof productionKg);
console.log("typeof isCertifiedOrganic:", typeof isCertifiedOrganic);

// ===========================
// CONVERSIONES
// ===========================

const productionText = String(productionKg);

console.log("\n--- Conversiones ---");

console.log("Producción como texto:", productionText);
console.log("typeof productionText:", typeof productionText);

// ===========================
// VALOR NULO
// ===========================

console.log("\n--- Valor nulo ---");

console.log("Inspector asignado:", currentInspector);
console.log("¿Es null?:", currentInspector === null);

console.log("\n===============================");
console.log("FIN DE FICHA");
console.log("===============================");
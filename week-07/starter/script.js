// ==========================================
// 🌱 SECCIÓN 1 — DATOS DEL DOMINIO
// ==========================================

// Constantes globales
const empresa = "AgroTech Colombia";
const anioActual = 2026;

// Array de cultivos (mínimo 5)
const cultivos = [
  { id: 1, nombre: "Tomate", lote: "A1", pesoKg: 120, precioKg: 3000, activo: true },
  { id: 2, nombre: "Papa", lote: "B2", pesoKg: 200, precioKg: 1500, activo: true },
  { id: 3, nombre: "Zanahoria", lote: "C3", pesoKg: 80, precioKg: 2000, activo: false },
  { id: 4, nombre: "Lechuga", lote: "D4", pesoKg: 50, precioKg: 2500, activo: true },
  { id: 5, nombre: "Cebolla", lote: "E5", pesoKg: 160, precioKg: 1800, activo: false }
];


// ==========================================
// 🧾 SECCIÓN 2 — FUNCIÓN DE FORMATO
// ==========================================

// Arrow function que formatea un cultivo
const formatCultivo = (cultivo) => {
  return `🌾 Cultivo: ${cultivo.nombre}
📦 Lote: ${cultivo.lote}
⚖️ Peso: ${cultivo.pesoKg} kg
💰 Precio por kg: $${cultivo.precioKg}
-----------------------------`;
};


// ==========================================
// 🧮 SECCIÓN 3 — FUNCIÓN DE CÁLCULO
// ==========================================

// Función pura: calcula el valor total de un cultivo
function calcularValorTotal(pesoKg, precioKg) {
  return pesoKg * precioKg;
}


// ==========================================
// ✅ SECCIÓN 4 — FUNCIÓN DE VALIDACIÓN
// ==========================================

// Verifica si el cultivo está activo
function esCultivoActivo(cultivo) {
  return cultivo.activo === true;
}


// ==========================================
// ⚙️ SECCIÓN 5 — FUNCIÓN CON PARÁMETRO POR DEFECTO
// ==========================================

// Calcula impuesto (por defecto 10%)
const calcularPrecioConImpuesto = (total, impuesto = 0.10) => {
  return total + (total * impuesto);
};


// ==========================================
// 📊 SECCIÓN 6 — REPORTE CON CALLBACKS
// ==========================================

console.log(`\n📊 REPORTE DE TRAZABILIDAD AGRÍCOLA - ${empresa}`);
console.log("===========================================\n");

for (const cultivo of cultivos) {

  // Usando función de validación
  if (!esCultivoActivo(cultivo)) {
    continue; // Ignora cultivos inactivos
  }

  // Usando función de formato
  console.log(formatCultivo(cultivo));

  // Usando función de cálculo
  const total = calcularValorTotal(cultivo.pesoKg, cultivo.precioKg);

  // Usando función con parámetro por defecto
  const totalConImpuesto = calcularPrecioConImpuesto(total);

  console.log(`💵 Valor total: $${total}`);
  console.log(`💸 Total con impuesto: $${totalConImpuesto}`);
  console.log("===========================================\n");
}
// ==========================================
// CALCULADORA - SISTEMA DE TRAZABILIDAD AGRÍCOLA
// ==========================================

// Datos del lote de cultivo
const cropName = "Maíz Amarillo";
const pricePerKg = 1_200; // precio por kilogramo
const harvestedKg = 8_500; // producción total del lote
const transportCost = 500_000; // costo de transporte

console.log("=====================================");
console.log("CALCULADORA AGRÍCOLA - TRAZABILIDAD");
console.log("=====================================");

// --------------------------------------
// OPERACIONES ARITMÉTICAS
// --------------------------------------

// Ingreso total por venta del cultivo
const totalRevenue = harvestedKg * pricePerKg;

console.log("\n--- Operaciones Aritméticas ---");
console.log("Producción total (kg):", harvestedKg);
console.log("Precio por kg:", pricePerKg);
console.log("Ingreso total:", totalRevenue);

// Promedio de producción por parcela (suponiendo 5 parcelas)
const parcels = 5;
const averageProduction = harvestedKg / parcels;

console.log("Producción promedio por parcela:", averageProduction);

// Resto de kg después de empacar en sacos de 100kg
const remainingKg = harvestedKg % 100;

console.log("Kg restantes después de empacar:", remainingKg);

// --------------------------------------
// ASIGNACIÓN COMPUESTA
// --------------------------------------

let totalCost = transportCost;

totalCost += 200_000; // costo adicional de almacenamiento
totalCost += 150_000; // costo de fertilizantes

console.log("\n--- Asignación Compuesta ---");
console.log("Costo total actualizado:", totalCost);

// --------------------------------------
// COMPARACIONES ESTRICTAS
// --------------------------------------

const minimumExportKg = 8_000;

const canExport = harvestedKg >= minimumExportKg;

console.log("\n--- Comparaciones ---");
console.log("Producción mínima para exportar:", minimumExportKg);
console.log("¿Puede exportar?", canExport);

// comparación estricta
const expectedCrop = "Maíz Amarillo";

console.log("¿El cultivo es el esperado?", cropName === expectedCrop);

// --------------------------------------
// OPERADORES LÓGICOS
// --------------------------------------

const isOrganic = true;
const hasCertification = true;

// validación para exportación premium
const canSellPremium = isOrganic && hasCertification;

console.log("\n--- Operadores Lógicos ---");
console.log("¿Puede vender como producto premium?", canSellPremium);

// ejemplo usando OR
const hasLocalMarket = true;
const hasInternationalBuyer = false;

const canSell = hasLocalMarket || hasInternationalBuyer;

console.log("¿Puede vender el cultivo?", canSell);

// negación
const isProductionLow = !(harvestedKg > 5_000);

console.log("¿Producción baja?", isProductionLow);

console.log("\n=====================================");
console.log("FIN DE CÁLCULOS");
console.log("=====================================");
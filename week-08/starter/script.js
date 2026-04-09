// ==========================================
// 🌱 INVENTARIO DE CULTIVOS
// ==========================================

// Array inicial (mínimo 5 objetos)
const cultivos = [
  { id: 1, nombre: "Tomate", lote: "A1", cantidad: 120, precio: 3000, activo: true },
  { id: 2, nombre: "Papa", lote: "B2", cantidad: 200, precio: 1500, activo: true },
  { id: 3, nombre: "Zanahoria", lote: "C3", cantidad: 80, precio: 2000, activo: false },
  { id: 4, nombre: "Lechuga", lote: "D4", cantidad: 50, precio: 2500, activo: true },
  { id: 5, nombre: "Cebolla", lote: "E5", cantidad: 160, precio: 1800, activo: false }
];

// ==========================================
// 📊 ESTADO INICIAL
// ==========================================
console.log("\n📊 INVENTARIO INICIAL:");
console.log(cultivos);


// ==========================================
// 🔧 MÉTODOS DE MUTACIÓN
// ==========================================

// push → agregar nuevo cultivo
cultivos.push({ id: 6, nombre: "Maíz", lote: "F6", cantidad: 300, precio: 1200, activo: true });

// pop → eliminar último elemento
cultivos.pop();

// unshift → agregar al inicio
cultivos.unshift({ id: 0, nombre: "Fresa", lote: "Z0", cantidad: 90, precio: 4000, activo: true });

// splice → reemplazar elemento
cultivos.splice(2, 1, { id: 7, nombre: "Pepino", lote: "X2", cantidad: 70, precio: 2200, activo: true });

console.log("\n🔧 INVENTARIO DESPUÉS DE MUTACIONES:");
console.log(cultivos);


// ==========================================
// 🔍 MÉTODOS DE BÚSQUEDA
// ==========================================

// find → buscar cultivo por nombre
const cultivoBuscado = cultivos.find(c => c.nombre === "Papa");

// filter → cultivos activos
const cultivosActivos = cultivos.filter(c => c.activo === true);

console.log("\n🔍 RESULTADOS DE BÚSQUEDA:");
console.log("Cultivo encontrado:", cultivoBuscado);
console.log("Cultivos activos:", cultivosActivos);


// ==========================================
// 🔁 MÉTODOS DE ITERACIÓN
// ==========================================

// forEach → mostrar inventario
console.log("\n📋 LISTADO DE CULTIVOS:");
cultivos.forEach(c => {
  console.log(`🌾 ${c.nombre} - Lote: ${c.lote} - Cantidad: ${c.cantidad}`);
});

// map → transformar datos (solo nombres y precios)
const resumen = cultivos.map(c => {
  return `${c.nombre}: $${c.precio}`;
});

console.log("\n🧾 RESUMEN DE PRECIOS:");
console.log(resumen);


// ==========================================
// ⚡ SPREAD OPERATOR
// ==========================================

// Copiar inventario sin modificar el original
const copiaInventario = [...cultivos];

// Agregar nuevo cultivo sin mutar el original
const nuevoInventario = [
  ...cultivos,
  { id: 8, nombre: "Aguacate", lote: "Y9", cantidad: 60, precio: 5000, activo: true }
];

console.log("\n⚡ COPIA DEL INVENTARIO:");
console.log(copiaInventario);

console.log("\n⚡ NUEVO INVENTARIO (SIN MUTAR ORIGINAL):");
console.log(nuevoInventario);


// ==========================================
// 📊 REPORTE FINAL
// ==========================================

console.log("\n📊 INVENTARIO FINAL:");
console.log(cultivos);
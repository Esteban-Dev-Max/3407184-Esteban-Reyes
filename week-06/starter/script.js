// =========================================
// PROYECTO SEMANA 06
// Reporte con Bucles — Trazabilidad Agrícola
// =========================================


// =========================================
// 1. DATOS DEL DOMINIO (ARRAY)
// =========================================

const crops = [
    { name: "Café Premium", category: "exportación", production: 9000 },
    { name: "Maíz Amarillo", category: "consumo interno", production: 5000 },
    { name: "Cacao Fino", category: "exportación", production: 7000 },
    { name: "Arroz Blanco", category: "consumo interno", production: 3000 },
    { name: "Caña de Azúcar", category: "industrial", production: 12000 },
    { name: "Plátano", category: "consumo interno", production: 4000 }
]



// =========================================
// 2. LISTAR ELEMENTOS (for...of)
// =========================================

console.log("\n--- LISTADO DE CULTIVOS ---")

for (const crop of crops) {
    console.log(`Cultivo: ${crop.name} | Categoría: ${crop.category} | Producción: ${crop.production} kg`)
}



// =========================================
// 3. CONTAR POR CATEGORÍA
// =========================================

let exportCount = 0
let internalCount = 0
let industrialCount = 0

for (const crop of crops) {
    if (crop.category === "exportación") {
        exportCount++
    } else if (crop.category === "consumo interno") {
        internalCount++
    } else {
        industrialCount++
    }
}

console.log("\n--- CONTEO POR CATEGORÍA ---")
console.log(`Exportación: ${exportCount}`)
console.log(`Consumo interno: ${internalCount}`)
console.log(`Industrial: ${industrialCount}`)



// =========================================
// 4. TOTAL Y PROMEDIO
// =========================================

let totalProduction = 0

for (const crop of crops) {
    totalProduction += crop.production
}

const average = totalProduction / crops.length

console.log("\n--- PRODUCCIÓN ---")
console.log(`Total: ${totalProduction} kg`)
console.log(`Promedio: ${average.toFixed(2)} kg`)



// =========================================
// 5. MÁXIMO Y MÍNIMO
// =========================================

let maxCrop = crops[0]
let minCrop = crops[0]

for (const crop of crops) {
    if (crop.production > maxCrop.production) {
        maxCrop = crop
    }

    if (crop.production < minCrop.production) {
        minCrop = crop
    }
}

console.log("\n--- EXTREMOS ---")
console.log(`Mayor producción: ${maxCrop.name} (${maxCrop.production} kg)`)
console.log(`Menor producción: ${minCrop.name} (${minCrop.production} kg)`)



// =========================================
// 6. REPORTE CON FOR CLÁSICO
// =========================================

console.log("\n--- REPORTE FINAL ---")

for (let i = 0; i < crops.length; i++) {
    const crop = crops[i]

    const status = crop.production >= average
        ? "Por encima del promedio"
        : "Por debajo del promedio"

    console.log(`${i + 1}. ${crop.name} → ${crop.production} kg (${status})`)
}



// =========================================
// EXTRA: WHILE (para cumplir rúbrica)
// =========================================

console.log("\n--- VALIDACIÓN CON WHILE ---")

let i = 0

while (i < crops.length) {
    if (crops[i].production < 3500) {
        console.log(`Producción baja detectada en: ${crops[i].name}`)
    }
    i++
}



// =========================================
// EXTRA: BREAK / CONTINUE
// =========================================

console.log("\n--- BÚSQUEDA RÁPIDA ---")

for (const crop of crops) {

    if (crop.production < 3000) {
        continue // ignora producciones muy bajas
    }

    if (crop.production > 10000) {
        console.log(`Alta producción encontrada: ${crop.name}`)
        break // se detiene al encontrar uno alto
    }
}
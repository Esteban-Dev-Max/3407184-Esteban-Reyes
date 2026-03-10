// =========================================
// PROYECTO SEMANA 04
// Generador de Mensajes de Dominio
// Dominio: Sistema de Trazabilidad Agrícola
// =========================================


// ===============================
// DATOS DEL DOMINIO
// ===============================

// nombre del cultivo (con espacios para usar trim)
const cropName = "   Lote de Café Orgánico   "

// categoría del producto agrícola
const category = "Cultivo de Café"

// descripción del lote
const description = "Lote cultivado de manera sostenible con técnicas agrícolas modernas."

// código de trazabilidad
const traceCode = "AGR-4587"



// ===============================
// MÉTODOS DE STRING
// ===============================

// eliminar espacios innecesarios
const cleanCropName = cropName.trim()

// convertir a mayúsculas
const cropUpper = cleanCropName.toUpperCase()

// validar si la descripción contiene una palabra clave
const containsSustainable = description.includes("sostenible")

// validar si el código empieza con AGR
const validTraceCode = traceCode.startsWith("AGR")

// extraer el prefijo del código
const codePrefix = traceCode.slice(0,3)

// reemplazar palabra en la descripción
const updatedDescription = description.replace("modernas", "tecnológicas")



// ===============================
// FICHA MULTILÍNEA
// ===============================

console.log(`
==============================================
   SISTEMA DE TRAZABILIDAD AGRÍCOLA
==============================================

Cultivo:       ${cropUpper}
Categoría:     ${category}
Código Lote:   ${traceCode}
Descripción:   ${updatedDescription}

--- Validaciones del sistema ---

¿Código inicia con AGR?: ${validTraceCode}
¿Descripción contiene "sostenible"?: ${containsSustainable}

==============================================
`)



// ===============================
// MENSAJE CORTO DE NOTIFICACIÓN
// ===============================

console.log(`🌱 Nuevo lote registrado en el sistema: ${cleanCropName} (${traceCode})`)
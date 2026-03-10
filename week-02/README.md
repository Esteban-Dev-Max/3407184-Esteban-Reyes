# Proyecto Semana 02 - Ficha de Datos del Dominio

## Dominio asignado
Sistema de Trazabilidad Agrícola

## Descripción
Este proyecto consiste en crear una ficha de datos en consola utilizando JavaScript y Node.js.  
Se aplican los conceptos aprendidos durante la semana, incluyendo variables, tipos de datos, verificación de tipos con `typeof` y conversiones de valores.

La ficha representa información de un **lote de cultivo** dentro de un sistema de trazabilidad agrícola.

## Tecnologías utilizadas
- JavaScript
- Node.js

## Variables utilizadas

| Variable | Tipo | Descripción |
|--------|--------|--------|
| cropBatchName | string | Nombre del lote de cultivo |
| productionKg | number | Producción estimada del lote |
| isCertifiedOrganic | boolean | Indica si el cultivo tiene certificación orgánica |
| currentInspector | null | Inspector asignado al lote (aún no asignado) |

## Verificación de tipos

Se utiliza `typeof` para verificar los tipos de las variables:

- string
- number
- boolean

## Conversión de datos

Se convierte un número a texto utilizando:

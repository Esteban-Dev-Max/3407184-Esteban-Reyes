// ===============================
// Dominio #82 - Sistema de Trazabilidad Agrícola
// Entidad principal: Lote Agrícola
// ===============================

const traceabilityData = {
  name: 'Lote de Café Premium',
  description: 'Sistema de trazabilidad agrícola para el seguimiento del cultivo desde la siembra hasta la cosecha.',
  code: 'AGRO-082',
  location: {
    farm: 'Finca El Progreso',
    region: 'Antioquia'
  },
  stages: [
    { name: 'Siembra', progress: 100 },
    { name: 'Crecimiento', progress: 75 },
    { name: 'Cosecha', progress: 40 }
  ],
  stats: {
    totalHarvestKg: 1200,
    qualityScore: 4.6,
    inspections: 15
  }
};

// Desestructuración de datos
const {
  name,
  description,
  code,
  location,
  stages,
  stats
} = traceabilityData;

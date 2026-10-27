# Estudio de Factibilidad — FRUTERRA ERP

## 9.1 Factibilidad operativa
- Situación actual: registros distribuidos en hojas de cálculo, documentos físicos y tareas manuales que impiden trazabilidad y generan retrabajo.  
- Beneficios esperados: centralización de información, trazabilidad por lote, alertas de cadena de frío, reducción de re-trabajos administrativos, mejora en cumplimiento de exportaciones.  
- Impacto organizacional: requiere capacitación para usuarios clave (plan mínimo: 2 semanas de sesiones prácticas) y un plan de gestión del cambio.

## 9.2 Factibilidad técnica
- Arquitectura propuesta: PWA cliente (React + TypeScript + Tailwind) → API REST → Base de datos relacional (PostgreSQL) → Almacenamiento de documentos (S3) → Integraciones externas (FEL SAT, agente aduanal).  
- Requerimientos de infraestructura: servidor de aplicación (EC2), RDS PostgreSQL, S3 para documentos, backups y monitoreo (CloudWatch).  
- Offline-first: la PWA permitirá registro sin conexión (IndexedDB) y sincronización posterior.  
- Riesgos técnicos: conectividad limitada en fincas (mitigación: PWA offline), integración con sensores IoT (simulación y opcionalidad), dependencia de terceros para FEL y aduanas.

## 9.3 Factibilidad económica
**Supuestos**: tipo de cambio 1 USD = Q7.7; equipo estimado para MVP: 2 desarrolladores, 1 diseñador/prototipador, 1 analista, 1 QA. Alcance MVP: prototipo + documentación + pruebas y capacitación.

### Estimación rápida en quetzales (Q)

**A. Infraestructura (mensual, AWS)**
- EC2 (t3.small): Q116–Q231  
- RDS (db.t3.small): Q116–Q308  
- S3 + transferencia: Q39–Q154  
- Total infraestructura mensual estimado: Q308–Q809

**B. Licencias y servicios**
- Si se usa software OSS, licencias = Q0. Posibles servicios pagos (certificados, integraciones) estimados Q0–Q200/mes.

**C. Implementación (horas estimadas)**
- Horas totales MVP: 600–900 horas.  
- Tarifa referencial: Q120/hora.  
- Costo implementación: Q72,000 – Q108,000.

**D. Capacitación y soporte inicial**
- Sesiones prácticas + manuales + soporte 30 días: Q3,000–Q8,000.

**Resumen inversión inicial (estimada)**
- Infraestructura (primer mes): Q308–Q809  
- Implementación (MVP): Q72,000–Q108,000  
- Capacitación y soporte: Q3,000–Q8,000  
- Total aproximado: Q75,308 – Q116,809

> Nota: Estos son rangos estimados. Se recomienda un presupuesto desglosado por partidas y un cronograma de pagos por hitos.

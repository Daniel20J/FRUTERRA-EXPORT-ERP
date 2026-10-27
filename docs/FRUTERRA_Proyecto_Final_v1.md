# FRUTERRA ERP — Proyecto Final

**Universidad:** Universidad Mariano Gálvez de Guatemala  
**Curso:** Análisis de Sistemas II  
**Catedrático:** Ing. Roberto Carlos González  
**Integrantes:** Carlos Daniel Breganza Ché (Ingeniero de Requerimientos), [Nombre 2] (Diseñador UML), [Nombre 3] (Diseñador de Prototipo)  
**Fecha:** Octubre 2026

---

## Índice

1. Introducción
2. Justificación
3. Objetivos
4. Descripción de la empresa
5. Situación actual
6. Identificación del problema
7. Alcance del sistema
8. Limitaciones del proyecto
9. Estudio de factibilidad
  9.1 Factibilidad operativa
  9.2 Factibilidad técnica
  9.3 Factibilidad económica
10. Levantamiento de requerimientos
11. Requerimientos funcionales
12. Requerimientos no funcionales
13. Reglas de negocio
14. Matriz de trazabilidad
15. Diagramas y modelado
16. Modelo de datos (ERD)
17. Prototipo
18. Planificación (Gantt)
19. Conclusiones
20. Recomendaciones
21. Anexos

---

## 1. Introducción
Este documento consolida el análisis, diseño y prototipo propuesto para FRUTERRA EXPORT, S.A., una empresa dedicada a la producción, comercialización y exportación de frutas. Se aplica la metodología RUP y técnicas UML para garantizar trazabilidad entre problemas, requerimientos, modelado y prototipo.

## 2. Justificación
FRUTERRA enfrenta duplicidad de registros, falta de trazabilidad y control manual de parámetros críticos (temperatura). El ERP propuesto integrará procesos productivos, logísticos y comerciales, reduciendo errores y mejorando la toma de decisiones.

## 3. Objetivos
- Objetivo general: Analizar y diseñar un ERP para FRUTERRA EXPORT, S.A., aplicando RUP y UML, proponiendo un prototipo funcional.
- Objetivos específicos: Levantamiento de requisitos, modelado, prototipo PWA, propuesta de factibilidad, etc.

## 4. Descripción de la empresa
FRUTERRA EXPORT, S.A. produce y comercializa frutas (mango, banano, piña, melón). Opera con varias fincas, centro de empaque, bodega con cámaras de frío y un punto de distribución.

## 5. Situación actual
La información está fragmentada en hojas de cálculo y documentos físicos; la facturación no está integrada y el registro de temperaturas es manual.

## 6. Identificación del problema
- Duplicidad de información
- Información desactualizada
- Falta de trazabilidad por lote
- Control manual de cadena de frío
- Errores y retrabajos en documentación de exportación

## 7. Alcance del sistema
El sistema cubre: gestión de usuarios, clientes, proveedores, productos, lotes, compras, inventario, almacenes, cadena de frío, trazabilidad, ventas, pedidos, exportaciones, facturación, reclamos y reportes.

## 8. Limitaciones del proyecto
- No se implementa sistema contable completo.  
- Integración con sensores físicos y agentes aduanales se prototipa/simula.  
- Migración de datos histórica exige limpieza previa y se propone como fase aparte.

## 9. Estudio de factibilidad

### 9.1 Factibilidad operativa
Se espera aceptación operativa si se realizan capacitaciones prácticas y migración de datos. La PWA permite operación en campo con conectividad intermitente.

### 9.2 Factibilidad técnica
Arquitectura propuesta: Frontend PWA (React+TS) → API REST → PostgreSQL (RDS) → S3 para documentos → Integraciones (FEL, aduana). Soporte offline vía IndexedDB.

### 9.3 Factibilidad económica
Ver documento de factibilidad (anexo) para estimaciones. Resumen: inversión inicial estimada Q75,308 – Q116,809.

## 10. Levantamiento de requerimientos
Técnica utilizada: cuestionario digital dirigido a stakeholders clave.  
Justificación: permite obtener información estructurada y comparativa por rol.  
Cuestionario: (anexo: texto y capturas).  
Resultados: consolidado en Fruterra_ERP_Levantamiento_Requerimiento.md (anexo).  
Evidencias: capturas del formulario y CSV exportado (anexo).

## 11. Requerimientos funcionales
(Listado completo en el anexo de requerimientos. Incluye RF-01..RF-15 con descripción, actor y prioridad.)

## 12. Requerimientos no funcionales
(Listado RNF-01..RNF-10 en el anexo; incluye métricas de rendimiento, disponibilidad y recuperación.)

## 13. Reglas de negocio
(Listado RN-01..RN-10 en el anexo.)

## 14. Matriz de trazabilidad
Se incluye en el anexo: cada requisito relacionado con caso de uso, diagrama y pantalla del prototipo.

## 15. Diagramas y modelado
Se incluyen los diagramas UML y DFD generados (PlantUML):
- Diagrama de clases (diagrams/class_diagram.puml)
- Casos de uso (diagrams/usecase_general.puml, diagrams/usecase_detailed_compras.puml, diagrams/usecase_detailed_ventas.puml)
- Diagramas de actividades (diagrams/activity_compra.puml, diagrams/activity_venta.puml)
- Diagramas de secuencia (diagrams/seq_registro_pedido.puml, diagrams/sequence_recepcion_oc.puml)
- Componentes (diagrams/componentes.puml)
- Despliegue (diagrams/despliegue.puml)
- DFD Nivel 0/1/2 (diagrams/dfd_level0.puml, diagrams/dfd_level1_inventory.puml, diagrams/dfd_level2_coldchain.puml)

> Nota: los archivos .puml están en /diagrams; exportar PNG desde PlantUML o visualizar en línea para insertar imágenes en la versión final del documento.

## 16. Modelo de datos (ERD)
El ERD debe reflejar entidades: Cliente, Producto, Lote, Pedido, OrdenCompra, MovimientoInventario, Embarque, Usuario. (Adjunto: diagrama de clases que ayuda en la creación del ERD.)

## 17. Prototipo
Se desarrolló un prototipo PWA (Vite + React + TypeScript + Tailwind) con las pantallas mínimas indicadas por el inciso 29: inicio de sesión, dashboard, gestión de clientes, proveedores, productos, inventario, registro de pedidos, gestión de compras, consulta de trazabilidad, gestión de reclamos, reportes y perfil.  

Implementación funcional: el prototipo incluye:  
- Autenticación básica (login local con usuarios en storage).  
- CRUD básico en cliente/productos (persistencia en localStorage).  
- Páginas para compras, pedidos, inventario, reclamos con datos sintéticos.  
- Monitoreo simulado de cadena de frío (estructura de datos y DFD).  
La carpeta /prototype contiene el código fuente (src/) y el build (dist/).  
## 18. Planificación (Gantt)
Cronograma y sprints (en documento de planificación / Gantt_preliminar.png en /docs).  
## 19. Conclusiones
Se presenta una solución integral que cubre los procesos principales, con prototipo funcional que permite validar interfaces, trazabilidad y reportes. Se recomienda la implementación en fases y la validación en campo.

## 20. Recomendaciones
- Realizar migración de datos por fases.  
- Implementar integración FEL y validaciones contables.  
- Instalar sensores de temperatura con integración para auditoría.  
- Capacitación por rol y plan de gestión del cambio.

## 21. Anexos
- Fruterra_ERP_Levantamiento_Requerimiento.md (cuestionario y respuestas).  
- Diagramas PlantUML (.puml) en /diagrams.  
- Capturas del prototipo en /prototype (usar `npm run build` y tomar imágenes).  
- Matriz de trazabilidad (tabla completa en /docs/matriz_trazabilidad.md si se requiere). 

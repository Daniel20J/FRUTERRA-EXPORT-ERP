# FRUTERRA ERP — Análisis y Diseño

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
FRUTERRA ERP es un proyecto cuyo propósito es proponer una solución informática integral para FRUTERRA EXPORT, S.A., orientada a integrar procesos productivos, logísticos, comerciales y de control de calidad (cadena de frío). Este documento presenta el levantamiento de requerimientos, el modelado, la factibilidad, el diseño conceptual y el prototipo inicial.

## 2. Justificación
FRUTERRA EXPORT, S.A. opera con registros distribuidos en hojas de cálculo, documentos y controles manuales, lo cual produce duplicidad de información, falta de trazabilidad y errores operativos que generan pérdidas y demoras. Un ERP integrado reducirá redundancias, mejorará la trazabilidad por lote, facilitará la generación automática de documentación de exportación y permitirá indicadores gerenciales en tiempo real.

## 3. Objetivos
### 3.1 Objetivo general
Analizar y diseñar un ERP para FRUTERRA EXPORT, S.A., aplicando metodología RUP y técnicas UML, con el fin de proponer una solución que optimice control de inventarios, trazabilidad, exportaciones y toma de decisiones.

### 3.2 Objetivos específicos
- Levantar y documentar requerimientos funcionales y no funcionales.  
- Modelar procesos y estructura del sistema (DFD, casos de uso, clases, secuencias).  
- Evaluar factibilidad operativa, técnica y económica.  
- Diseñar prototipo PWA (Vite + React + TS + Tailwind) con pantallas principales.  
- Proponer seguridad, respaldo y control de acceso.

## 4. Descripción de la empresa
FRUTERRA EXPORT, S.A. se dedica a la producción y comercialización de frutas (mango, banano, piña, melón). Opera con múltiples fincas, una bodega principal con cámaras de frío, un centro de empaque y un punto de distribución en la capital. Realiza ventas locales y exportaciones internacionales.

## 5. Situación actual
Los registros se gestionan en hojas de cálculo, plantillas Word y documentos físicos. Existen problemas de duplicidad, desactualización, dificultad para conocer inventario por lote y ubicación, ausencia de trazabilidad, y control manual de temperatura. La facturación local se hace con FEL (SAT) pero sin integración con inventarios.

## 6. Identificación del problema
- Información distribuida y duplicada entre Excel, papel y sistemas independientes.  
- Falta de trazabilidad por lote.  
- Control manual y tardío de temperatura de cámaras.  
- Errores en pedidos y discrepancias entre despacho y documentación.  
- Retrasos y trabajo duplicado en la generación de documentación de exportación.

## 7. Alcance del sistema
El alcance inicial incluye: gestión de usuarios/seguridad, clientes, proveedores, productos y lotes, compras, inventario y almacenes, cadena de frío (temperaturas y alertas), trazabilidad por lote, gestión de pedidos, cotizaciones, ventas, exportaciones (documentación), control de reclamos y reportes gerenciales. Prototipo con pantallas 1–12 (menús y navegación).

## 8. Limitaciones del proyecto
- No se implementará un sistema contable completo; solo integración y exportación de datos relevantes a contabilidad.  
- Datos históricos serán migrados de forma manual o por proceso específico; se propone migración de datos de Excel según disponibilidad.  
- Algunas funcionalidades (integración con agentes aduanales o sensores de temperatura reales) se prototiparán o simularán.

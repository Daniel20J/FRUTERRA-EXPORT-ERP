# Requerimientos — FRUTERRA ERP

## Técnica de levantamiento
Se utilizó un cuestionario digital dirigido a stakeholders clave: Gerente, Encargado de almacén, Encargado de exportaciones, Encargado de producción, Vendedor y Cliente. Respuestas consolidadas en Fruterra_ERP_Levantamiento_Requerimiento.md (anexo).

## Requerimientos funcionales (RF) — mínimos 15
- **RF-01 — Registrar clientes**  
  Actor: Vendedor/Administrador — Prioridad: Alta  
  Descripción: Registrar clientes con NIT, razón social, dirección, país, ciudad, teléfono, correo, persona de contacto, condiciones de pago, moneda y estado.

- **RF-02 — Registrar proveedores**  
  Actor: Encargado de compras — Prioridad: Media  
  Descripción: Registrar proveedores con datos fiscales, productos suministrados, condiciones de pago y estado.

- **RF-03 — Registrar productos y lotes**  
  Actor: Producción/Almacén — Prioridad: Alta  
  Descripción: Registrar productos y lotes con código de lote, finca origen, fecha de cosecha, cantidad, clasificación, peso promedio, estado y fecha de ingreso al almacén.

- **RF-04 — Registro de recepción de fruta (boleta)**  
  Actor: Encargado de almacén/Producción — Prioridad: Alta  
  Descripción: Registrar recepción con finca, peso, calidad, temperatura de llegada y generar código/QR de lote.

- **RF-05 — Gestión de inventario por lotes y almacén**  
  Actor: Encargado de almacén — Prioridad: Alta  
  Descripción: Consultar y actualizar existencias por producto, lote y almacén; registrar entradas, salidas, transferencias y ajustes con usuario y motivo.

- **RF-06 — Trazabilidad de lote**  
  Actor: Gerente/Encargado de exportaciones — Prioridad: Alta  
  Descripción: Consultar el historial de un lote desde finca hasta cliente (Finca → Producción → Lote → Empaque → Almacén → Pedido → Cliente).

- **RF-07 — Gestión de pedidos y estados**  
  Actor: Vendedor/Encargado de almacén — Prioridad: Alta  
  Descripción: Registrar pedidos, gestionar estados (Registrado, Confirmado, En preparación, Despachado, En tránsito, Entregado, Cancelado) y notificar cambios.

- **RF-08 — Generación automática de packing list y documentos de exportación**  
  Actor: Encargado de exportaciones — Prioridad: Alta  
  Descripción: Generar packing list, factura comercial y certificados a partir de la información del pedido y los lotes.

- **RF-09 — Gestión de cotizaciones y promociones**  
  Actor: Vendedor/Administrador — Prioridad: Media  
  Descripción: Crear cotizaciones y gestionar promociones/descuentos con vigencia y reglas de aplicación.

- **RF-10 — Registro y gestión de reclamos y devoluciones**  
  Actor: Atención al cliente/Encargado de almacén — Prioridad: Media  
  Descripción: Registrar reclamos con número, cliente, pedido, descripción, evidencia (fotos), responsable y estado; registrar resolución.

- **RF-11 — Control de cadena de frío y alertas**  
  Actor: Encargado de almacén/Supervisor — Prioridad: Alta  
  Descripción: Registro de temperatura por cámara (manual o desde sensores), alertas fuera de rango y registro de incidentes.

- **RF-12 — Gestión de compras (solicitudes y órdenes)**  
  Actor: Encargado de compras/Encargado de almacén — Prioridad: Media  
  Descripción: Solicitud de compra, revisión, orden de compra, recepción y actualización de inventario.

- **RF-13 — Gestión de usuarios y roles**  
  Actor: Administrador — Prioridad: Alta  
  Descripción: Crear y asignar roles con permisos (Administrador, Gerente, Vendedor, Encargado de almacén, Producción, Exportaciones, Contador).

- **RF-14 — Reportes e indicadores gerenciales**  
  Actor: Gerente — Prioridad: Alta  
  Descripción: Generar reportes: ventas por periodo, ventas por producto, inventario disponible, productos por vencer, pedidos pendientes, exportaciones por país, cuentas por cobrar/pagar.

- **RF-15 — Consulta de inventario en móvil y operación offline**  
  Actor: Vendedor/Producción/Almacén — Prioridad: Alta  
  Descripción: Permitir consulta y registro desde dispositivos móviles en modo offline y sincronizar al reconectar.

## Requerimientos no funcionales (RNF) — mínimos 10
- **RNF-01 — Tiempo de respuesta**: Las consultas de inventario y trazabilidad deben responder en ≤ 2 segundos (hasta 50k registros).  
- **RNF-02 — Disponibilidad**: 99.5% durante horario operativo (7:00–19:00).  
- **RNF-03 — Autenticación**: Contraseñas mín. 10 caracteres; bloqueo tras 5 intentos; MFA para administradores.  
- **RNF-04 — Backups**: Copias diarias con retención mínima de 30 días.  
- **RNF-05 — Escalabilidad**: Soportar crecimiento del 50% anual en registros sin degradación mayor al 20%.  
- **RNF-06 — Usabilidad**: Tareas críticas completables en ≤ 3 pasos por usuario entrenado; UI responsive y con botones grandes para uso con guantes.  
- **RNF-07 — Auditoría**: Cada movimiento de inventario registra usuario, fecha y hora; registros auditable por rol administrador.  
- **RNF-08 — Recuperación**: RTO ≤ 4 horas, RPO ≤ 24 horas.  
- **RNF-09 — Rendimiento de reportes**: Reportes agregados mensuales generados en ≤ 10 segundos.  
- **RNF-10 — Compatibilidad móvil y offline**: PWA o app que soporte operaciones offline y sincronización automática en ≤ 30s tras reconexión.

## Reglas de negocio (mín. 10)
- RN-01: Un pedido no podrá confirmarse si no existe disponibilidad suficiente del producto solicitado.  
- RN-02: Una promoción solamente podrá aplicarse dentro de su período de vigencia.  
- RN-03: Un usuario solamente podrá ejecutar las operaciones correspondientes a su rol.  
- RN-04: Todo movimiento de inventario deberá registrar el usuario responsable, la fecha y el motivo.  
- RN-05: Un lote en estado "Cuarentena" no podrá asignarse a pedidos hasta su liberación.  
- RN-06: Las transferencias entre almacenes se registran como salida del origen y entrada del destino sólo al confirmar la recepción.  
- RN-07: Las órdenes de compra cuyo total exceda Q25,000 requieren aprobación del gerente.  
- RN-08: Las temperaturas fuera de rango generan un registro de incidente y notificación al supervisor y gerente.  
- RN-09: Los documentos de exportación se generarán automáticamente a partir de la información del pedido y lotes; cualquier modificación manual requiere justificativo y registro de auditoría.  
- RN-10: Solo el rol Contador o Administrador puede anular facturas emitidas; debe registrarse el motivo y evidencia.

## Matriz de trazabilidad (ejemplo parcial)
| Requerimiento | Caso de uso | Diagrama | Prototipo (pantalla) |
|---|---|---|---|
| RF-03 Registrar productos y lotes | CU-Registrar Lote | DFD Nivel 1 (Lotes) / Clase: Lote | Pantalla "Registro de Lote" (#5) |
| RF-05 Gestión de inventario | CU-Consultar Inventario / CU-Movimiento | DFD Nivel 1 (Inventario) / Secuencia: Movimiento | Pantalla "Inventario" (#6) |
| RF-11 Control de cadena de frío | CU-Registrar Temperatura / CU-Alertas | DFD Nivel 2 (Cadena de Frío) | Pantalla "Monitoreo Temperatura" (#10) |

(Completar la matriz para todos los RF en la versión final del documento.)

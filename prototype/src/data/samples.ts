export const clients = [
  { id: 'C001', name: 'Supermercados La Flor', country: 'GT', contact: 'Ana Ruiz', creditLimit: 50000 },
  { id: 'C002', name: 'Distribuciones del Norte', country: 'GT', contact: 'Carlos Mejía', creditLimit: 20000 }
]

export const products = [
  { id: 'P001', name: 'Mango Ataulfo', presentation: 'Caja 10kg', category: 'Fruta', price: 30 },
  { id: 'P002', name: 'Banano Cavendish', presentation: 'Caja 20kg', category: 'Fruta', price: 24 }
]

export const lots = [
  { id: 'L20261001-01', productId: 'P001', farm: 'Finca El Sol', harvestDate: '2026-10-01', qty: 200, status: 'En Almacén' }
]

export const suppliers = [
  { id: 'S001', name: 'Insumos Agrícolas S.A.', contact: 'Pedro López', categories: ['Fertilizantes', 'Plásticos'] },
  { id: 'S002', name: 'Empaques del Sur', contact: 'María Gomez', categories: ['Cajas', 'Etiquetas'] }
]

export const orders = [
  { id: 'O001', clientId: 'C001', date: '2026-10-10', state: 'Registrado', items: [{ productId: 'P001', qty: 10 }] }
]

export const purchases = [
  { id: 'PC001', supplierId: 'S002', date: '2026-10-05', state: 'Recepcionada', items: [{ productId: 'P002', qty: 50 }] }
]

export const claims = [
  { id: 'R001', orderId: 'O001', client: 'Supermercados La Flor', date: '2026-10-12', status: 'Abierto', reason: 'Producto en mal estado' }
]

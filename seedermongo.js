db = db.getSiblingDB('tickets');

db.tickets.insertMany([
  { user: 'usuario 1', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 2', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 3', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 4', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 5', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 6', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 7', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 8', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 9', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 10', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 11', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 12', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 13', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 14', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 15', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 16', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 17', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 18', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 19', status: 'abierto', createdAt: new Date(), updatedAt: new Date() },
  { user: 'usuario 20', status: 'cerrado', createdAt: new Date(), updatedAt: new Date() },
]);
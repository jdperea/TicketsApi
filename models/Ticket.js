const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['abierto', 'cerrado']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);
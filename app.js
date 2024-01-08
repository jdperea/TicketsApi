const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Ticket = require('./models/Ticket');

const app = express();
app.use(bodyParser.json());

// Conectar a MongoDB
// mongoose.connect('mongodb://localhost:27017/tickets', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

// Crear un ticket
app.post('/tickets', async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    const savedTicket = await newTicket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener tickets con paginación y filtrado opcional por ID
app.get('/tickets', async (req, res) => {
  try {
    const { page = 1, limit = 10, userId } = req.query;
    const query = userId ? { user: userId } : {};

    const tickets = await Ticket.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Ticket.countDocuments(query);

    res.json({
      tickets,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Editar un ticket
app.put('/tickets/:id', async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTicket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un ticket
app.delete('/tickets/:id', async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
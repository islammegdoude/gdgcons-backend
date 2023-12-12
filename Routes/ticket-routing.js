const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/TicketCintrollers/ticket-controllers');

// createTicket
router.post('/ticket/create', ticketController.createTicket);

// getTicketById
router.get('/posts/getTicketById' ,ticketController.getTicketById);

// getTicketsByUser
router.get('/posts/getTicketsByUser' ,ticketController.getTicketsByUser);

module.exports = router;
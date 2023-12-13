const express = require('express');
const router = express.Router();
const ticketController = require('../Controllers/TicketCintrollers/ticket-controllers');

// createTicket (id_user (int), problem (string),state ("on progress" or "done"))
router.post('/ticket/create', ticketController.createTicket);

// getTicketById (id_user (int))
router.get('/posts/getTicketById' ,ticketController.getTicketById);


module.exports = router;
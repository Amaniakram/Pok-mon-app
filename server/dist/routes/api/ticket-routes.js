// server/routes/ticket-routes.ts
import express from 'express';
import { createTicket, getTickets, closeTicket } from '../controllers/ticket-controller.js';
const router = express.Router();
router.post('/tickets', createTicket);
router.get('/tickets', getTickets);
router.put('/tickets/:id/close', closeTicket);
export default router;

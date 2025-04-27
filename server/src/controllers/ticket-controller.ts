// server/controllers/ticket-controller.ts

import { Request, Response } from 'express';

interface Ticket {
  id: number;
  user: string;
  issue: string;
  status: 'open' | 'closed';
}

let tickets: Ticket[] = [];

// Create a new ticket
export const createTicket = (req: Request, res: Response): void => {
  const { user, issue } = req.body;
  const newTicket: Ticket = {
    id: tickets.length + 1,
    user,
    issue,
    status: 'open',
  };
  tickets.push(newTicket);
  res.status(201).json(newTicket);
};

// Get all tickets
export const getTickets = (req: Request, res: Response): void => {
  res.json(tickets);
};

// Close a ticket by ID
export const closeTicket = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const ticket = tickets.find((t) => t.id === id);

  if (ticket) {
    ticket.status = 'closed';
    res.json(ticket);
  } else {
    res.status(404).json({ error: 'Ticket not found' });
  }
};

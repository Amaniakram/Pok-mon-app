// server/controllers/ticket-controller.ts
let tickets = [];
// Create a new ticket
export const createTicket = (req, res) => {
    const { user, issue } = req.body;
    const newTicket = {
        id: tickets.length + 1,
        user,
        issue,
        status: 'open',
    };
    tickets.push(newTicket);
    res.status(201).json(newTicket);
};
// Get all tickets
export const getTickets = (req, res) => {
    res.json(tickets);
};
// Close a ticket by ID
export const closeTicket = (req, res) => {
    const id = parseInt(req.params.id);
    const ticket = tickets.find((t) => t.id === id);
    if (ticket) {
        ticket.status = 'closed';
        res.json(ticket);
    }
    else {
        res.status(404).json({ error: 'Ticket not found' });
    }
};

export const getTickets = (state) => {
  return Object.keys(state.ticket.tickets).length > 0 ? state.ticket.tickets : null;
};

export const getTicket = (ticketId) => (state) => {
  return Object.keys(state.ticket.tickets).length > 0
    ? state.ticket.tickets.find((ticket) => ticket.id === ticketId)
    : null;
};

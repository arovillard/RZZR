export const getCustomerTickets = (customerId) => (state) => {
  const customerTickets = state.ticket.customerTickets || {};
  return Object.keys(customerTickets).length > 0 ? customerTickets[customerId] : null;
};

export const getTicket = (ticketId, customerId) => (state) => {
  const tickets = state.ticket.customerTickets[customerId];
  return Object.keys(tickets).length > 0
    ? Object.values(tickets).find((ticket) => ticket.id === ticketId)
    : null;
};

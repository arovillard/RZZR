import { TYPES } from '@/actions/TicketActions';

export const ticketReducer = (state = { tickets: [] }, { payload, type }) => {
  switch (type) {
    case TYPES.CREATE_TICKET_SUCCESS:
      return { ...state, tickets: [...state.tickets, payload.ticket] };
    default:
      return state;
  }
};

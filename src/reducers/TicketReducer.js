import { TYPES } from '@/actions/TicketActions';
import { TYPES as GLOBAL_TYPES } from '@/actions/GlobalActions';

export const ticketReducer = (state = { tickets: [] }, { payload, type }) => {
  if (type === GLOBAL_TYPES.GLOBAL_RESET) {
    return {
      tickets: [],
    };
  }
  switch (type) {
    case TYPES.CREATE_TICKET_SUCCESS:
      return { ...state, tickets: [...state.tickets, payload.ticket] };
    case TYPES.LOAD_TICKETS_SUCCESS:
      return {
        ...state,
        customerTickets: {
          ...state.customerTickets,
          ...payload.tickets,
        },
      };
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

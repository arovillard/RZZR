import { TicketController } from '@/controllers';
import { strings } from '@/localization';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  CREATE_TICKET: 'CREATE_TICKET',
  CREATE_TICKET_REQUEST: 'CREATE_TICKET_REQUEST',
  CREATE_TICKET_SUCCESS: 'CREATE_TICKET_SUCCESS',
  CREATE_TICKET_ERROR: 'CREATE_TICKET_ERROR',
};

const createTicketRequest = () => ({
  type: TYPES.CREATE_TICKET_REQUEST,
  payload: null,
});

const createTicketSuccess = (ticket) => ({
  type: TYPES.CREATE_TICKET_SUCCESS,
  payload: { ticket },
});

const createTicketError = (error) => ({
  type: TYPES.CREATE_TICKET_ERROR,
  payload: { error },
});

export const createTicket =
  (ticket) =>
  async (dispatch, _, { demoMode = true, networkService }) => {
    try {
      dispatch(createTicketRequest());
      const ticketController = new TicketController(networkService);
      const { data } = await ticketController.submitTicket(ticket, demoMode);
      dispatch(createTicketSuccess(data.ticket));
    } catch ({ data }) {
      dispatch(createTicketError(data?.error ?? strings.ticket.apiError));
    }
  };

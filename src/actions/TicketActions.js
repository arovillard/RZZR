import { TicketController } from '@/controllers';
import { strings } from '@/localization';

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  CREATE_TICKET: 'CREATE_TICKET',
  CREATE_TICKET_REQUEST: 'CREATE_TICKET_REQUEST',
  CREATE_TICKET_SUCCESS: 'CREATE_TICKET_SUCCESS',
  CREATE_TICKET_ERROR: 'CREATE_TICKET_ERROR',
  LOAD_TICKETS: 'LOAD_TICKETS',
  LOAD_TICKETS_REQUEST: 'LOAD_TICKETS_REQUEST',
  LOAD_TICKETS_SUCCESS: 'LOAD_TICKETS_SUCCESS',
  LOAD_TICKETS_ERROR: 'LOAD_TICKETS_ERROR',
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

const getTicketsRequest = () => ({
  type: TYPES.LOAD_TICKETS_REQUEST,
  payload: null,
});

const getTicketsSuccess = (tickets) => ({
  type: TYPES.LOAD_TICKETS_SUCCESS,
  payload: { tickets },
});

const getTicketsError = (error) => ({
  type: TYPES.LOAD_TICKETS_ERROR,
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

export const getTickets =
  (agentId, customerId) =>
  async (dispatch, _, { networkService }) => {
    try {
      dispatch(getTicketsRequest());
      const ticketController = new TicketController(networkService);
      const { data } = await ticketController.fetchTickets(agentId, customerId);
      dispatch(getTicketsSuccess({ [customerId]: { ...data.data.tickets } }));
    } catch ({ data }) {
      dispatch(getTicketsError(data?.error ?? strings.ticket.ticketFetchFailure));
    }
  };

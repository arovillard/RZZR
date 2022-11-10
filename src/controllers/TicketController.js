import { routes } from '@/controllers/routes';
import { strings } from '@/localization';

function getRandomIntInclusive() {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class TicketController {
  constructor(networkService) {
    this.networkService = networkService;
  }
  fetchTickets(agentId, customerId) {
    return this.networkService.request({
      method: 'GET',
      params: {
        recordType: 'ticketList',
        agent: agentId,
        customerId,
      },
      body: {},
    });
  }

  submitTicket(ticket, demoMode) {
    if (demoMode) {
      // mock the API retutning the ticket with an id
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (ticket) {
            resolve({
              data: {
                ticket: { id: getRandomIntInclusive() * getRandomIntInclusive(), ...ticket },
              },
            });
          } else {
            reject({ data: { error: strings.ticket.apiError } });
          }
        }, 250);
      });
    }

    return this.networkService.request({
      method: 'POST',
      url: routes.ticket.createTicket,
      data: ticket,
    });
  }
}

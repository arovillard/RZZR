export class CustomerController {
  constructor(networkService) {
    this.networkService = networkService;
  }

  getCustomers(agentId) {
    return this.networkService.request({
      method: 'GET',
      params: {
        recordType: 'customerList',
        agent: agentId,
      },
      body: {},
    });
  }
}

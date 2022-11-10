export class CustomerController {
  constructor(networkService) {
    this.networkService = networkService;
  }

  fetchCustomers(agentId) {
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

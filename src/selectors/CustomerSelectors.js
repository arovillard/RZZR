export const getCustomers = (state) => {
  return state.customer.customers;
};

export const getCustomer = (customerId) => (state) => {
  const customers = state.customer.customers;
  return Object.keys(customers).length > 0
    ? customers.find((customer) => customer.id === customerId)
    : null;
};

import { CustomerController } from '@/controllers';
import { strings } from '@/localization';

export const TYPES = {
  CUSTOMER: 'CUSTOMER',
  LOAD_CUSTOMERS: 'LOAD_CUSTOMERS',
  LOAD_CUSTOMERS_REQUEST: 'LOAD_CUSTOMERS_REQUEST',
  LOAD_CUSTOMERS_ERROR: 'LOAD_CUSTOMERS_ERROR',
  LOAD_CUSTOMERS_SUCCESS: 'LOAD_CUSTOMERS_SUCCESS',
};

const getCustomersRequest = () => ({
  type: TYPES.LOAD_CUSTOMERS_REQUEST,
  payload: null,
});

const getCustomerSuccess = (customers) => ({
  type: TYPES.LOAD_CUSTOMERS_SUCCESS,
  payload: { customers },
});

const getCustomerError = (error) => ({
  type: TYPES.LOAD_CUSTOMERS_ERROR,
  payload: { error },
});

export const getCustomers =
  (agentId) =>
  async (dispatch, _, { networkService }) => {
    try {
      dispatch(getCustomersRequest());
      const customerController = new CustomerController(networkService);
      const { data } = await customerController.getCustomers(agentId);
      dispatch(getCustomerSuccess(data.data.customers));
    } catch (data) {
      dispatch(getCustomerError(data?.message ?? strings.login.somethingIsWrong));
    }
  };

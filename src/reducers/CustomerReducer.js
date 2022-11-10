import { TYPES } from '@/actions/CustomerActions';
import { TYPES as GLOBAL_TYPES } from '@/actions/GlobalActions';

const initialState = {
  customers: [],
};

export const customerReducer = (state = initialState, { payload, type }) => {
  if (type === GLOBAL_TYPES.GLOBAL_RESET) {
    return {
      customers: [],
    };
  }
  switch (type) {
    case TYPES.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: [...payload.customers],
      };
    default:
      return state;
  }
};

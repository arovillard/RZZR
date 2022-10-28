import { TYPES } from '@/actions/UserActions';

const initialState = {
  customers: [],
};

export const customerReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case TYPES.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: [...state.customers, ...payload.customers],
      };
    default:
      return state;
  }
};

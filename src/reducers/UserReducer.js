import { TYPES } from '@/actions/UserActions';
import { TYPES as GLOBAL_TYPES } from '@/actions/GlobalActions';

export const userReducer = (state = {}, { payload, type }) => {
  if (type === GLOBAL_TYPES.GLOBAL_RESET) {
    return {};
  }
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return { ...payload.user.data };
    case TYPES.CLEAR_STORE:
      return {};
    default:
      return state;
  }
};

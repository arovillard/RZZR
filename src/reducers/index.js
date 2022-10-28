import { combineReducers } from 'redux';
import { ticketReducer } from '@/reducers/TicketReducer';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { customerReducer } from '@/reducers/CustomerReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  ticket: ticketReducer,
  customer: customerReducer,
});

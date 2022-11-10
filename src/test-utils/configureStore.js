import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '@/reducers';
import { initialStore } from '@/store';

export function configureStore({
  initialState = initialStore,
  demoMode = false,
  networkService = {},
}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk.withExtraArgument({ networkService, demoMode }))
  );
}

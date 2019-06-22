import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers/rootReducers";
import immutableStateInvariant from "redux-immutable-state-invariant";
import createSagaMiddleware from "redux-saga";
import * as cartSagas from "./actions";

export default function configStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25
      })) ||
    compose;

  const store = createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, immutableStateInvariant()))
  );

  Object.values(cartSagas).forEach(saga => {
    sagaMiddleware.run(saga);
  });

  return store;
}

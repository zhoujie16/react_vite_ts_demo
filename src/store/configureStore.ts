import { createStore, applyMiddleware, compose } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index.reducer";

const promiseMiddleWare = createPromise({
  promiseTypeSuffixes: ["PENDING", "SUCCESS", "ERROR"],
});

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middlewares = [thunkMiddleware, promiseMiddleWare];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export default function configStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}

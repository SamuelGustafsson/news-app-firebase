import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers as rootReducer } from "./root-reducer";

export default () => {
  let middlewares = [thunk];
  let store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
};

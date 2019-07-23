import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import logger from '../middleWares/logger';
import reducer from '../reducers/index';
import login from '../middleWares/login';

const middleware = process.env
  ? [logger, login]
  : [login];

const enhancers = [];

const rootStore = () => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );
  store.asyncReducers = {};
  return store;
};

export default rootStore();

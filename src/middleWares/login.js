import * as types from '../constants';
import login from '../services/login';

const loginTypes = [
  types.getUser,
];

const handleMapping = {
  [types.getUser]: async ({ store }) => {
    const sendData = store.getState().register;
    const { data } = await login(sendData);
    console.log(data);
    // TODO
    // store.dispatch new action
  },
};

export default store => next => async (action) => {
  console.log(action);
  if (loginTypes.includes(action.type)) handleMapping[action.type]({ store });
  return next(action);
};

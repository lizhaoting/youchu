import types from '../constants';

const defaultStore = {
  userName: 'demo user',
  avatar: 'https://cdn.nlark.com/yuque/0/2019/jpeg/84141/1546850445305-53b33355-8d99-4920-9a59-48fb96373e2f.jpeg',
};

export default (state = defaultStore, action) => {
  switch (action.type) {
    case types.init:
      return { ...state, ...action.payload };
    case types.getUser:
      return state;
    default:
      return state;
  }
};

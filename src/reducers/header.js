import types from '../constants';

const defaultStore = {
  searchParam: '',
};

export default (state = defaultStore, action) => {
  switch (action.type) {
    case types.changeSearchParam:
      return { ...state, searchParam: action.payload };
    default:
      return state;
  }
};

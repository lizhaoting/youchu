import types from '../constants';

export const changeSearchParams = value => ({
  type: types.changeSearchParam,
  payload: value,
});

export const handleSearch = value => ({
  type: types.handleSearch,
  payload: value,
});

export const nothing = () => {};

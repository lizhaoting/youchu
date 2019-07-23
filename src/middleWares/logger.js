const logger = store => next => (action) => {
    console.group('%caction', 'color: #9e9e9e', action.type);                          // eslint-disable-line
    console.info('%cpre state', 'color: #9e9e9e', store.getState());                   // eslint-disable-line
    console.info('%caction', 'color: #03a9f4', action);                                // eslint-disable-line
  const result = next(action);                                                         // eslint-disable-line
    console.info('%cnext state', 'color: #4caf50', store.getState());                  // eslint-disable-line
    console.groupEnd('%caction', 'color: #9e9e9e', action.type);                       // eslint-disable-line
  return result;
};
export default logger;

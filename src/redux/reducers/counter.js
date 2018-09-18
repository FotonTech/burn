export const initialState = {
  count: 0,
};

const actionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'COUNTER_MINUS':
      newState = {
        ...state,
        count: state.count - 1,
      };
      return newState;
    case 'COUNTER_PLUS':
      newState = {
        ...state,
        count: state.count + 1,
      };
      return newState;
    default:
      return state;
  }
};

export default actionReducer;

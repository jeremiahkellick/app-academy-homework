import merge from 'lodash/merge';

const initialState = {
  city: "Please Select",
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SWITCH_LOCATION":
      const newState = merge({}, action);
      if (newState.type !== undefined) delete newState.type;
      return newState;
    default:
      return state;
  }
};

export default reducer;

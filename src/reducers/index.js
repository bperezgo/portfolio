import { ACTIONS } from "../actions/actionsName";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DETAILED_PROFILE:
      return {
        ...state,
        isDetailedProfile: action.payload,
      };
    default:
      return state;
  }
};

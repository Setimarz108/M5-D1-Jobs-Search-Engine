import { initialState } from "../store";
import { ADD_TO_FAVS } from "../actions";

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
    case ADD_TO_FAVS:
      return {
        ...state,
        favJobs: [...state.favJobs, action.payload],
      };

    default:
      return state;
  }
};

export default favoritesReducer;

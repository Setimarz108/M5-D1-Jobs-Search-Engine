import { initialState } from "../store";
import { FETCH_JOBS } from "../actions";

const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return {
        ...state,
        storage:action.payload,
      }
    default:
      return state;
  }
};

export default jobsReducer;

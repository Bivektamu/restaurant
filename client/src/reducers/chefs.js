import { CHEFS_LOADED, CHEFS_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  chefs: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHEFS_LOADED:
      return {
        ...state,
        loading: false,
        chefs: payload
      };

    case CHEFS_ERROR:
      return {
        ...state,
        loading: false,
        chefs: null
      };

    default:
      return state;
  }
}

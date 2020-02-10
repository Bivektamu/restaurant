import { RECENT_LOADED, RECENT_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  recent: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RECENT_LOADED:
      return {
        ...state,
        loading: false,
        recent: payload
      };

    case RECENT_ERROR:
      return {
        ...state,
        loading: false,
        recent: null
      };

    default:
      return state;
  }
}

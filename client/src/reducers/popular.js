import { POPULAR_LOADED, POPULAR_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  popular: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case POPULAR_LOADED:
      return {
        ...state,
        loading: false,
        popular: payload
      };

    case POPULAR_ERROR:
      return {
        ...state,
        loading: false,
        popular: null
      };

    default:
      return state;
  }
}

import { BANNER_LOADED, BANNER_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  banner: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BANNER_LOADED:
      return {
        ...state,
        loading: false,
        banner: payload
      };

    case BANNER_ERROR:
      return {
        ...state,
        loading: false,
        banner: null
      };

    default:
      return state;
  }
}

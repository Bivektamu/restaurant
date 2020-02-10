import { NAVBAR_LOADED, NAVBAR_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  navbar: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NAVBAR_LOADED:
      return {
        ...state,
        loading: false,
        navbar: payload
      };

    case NAVBAR_ERROR:
      return {
        ...state,
        loading: false,
        navbar: null
      };

    default:
      return state;
  }
}

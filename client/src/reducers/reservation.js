import { RESERVATION_LOADED, RESERVATION_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  reservation: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RESERVATION_LOADED:
      return {
        ...state,
        loading: false,
        reservation: payload
      };

    case RESERVATION_ERROR:
      return {
        ...state,
        loading: false,
        reservation: null
      };

    default:
      return state;
  }
}

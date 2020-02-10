import { OFFER_LOADED, OFFER_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  offer: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case OFFER_LOADED:
      return {
        ...state,
        loading: false,
        offer: payload
      };

    case OFFER_ERROR:
      return {
        ...state,
        loading: false,
        offer: null
      };

    default:
      return state;
  }
}

import { TESTIMONIAL_LOADED, TESTIMONIAL_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  testimonial: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TESTIMONIAL_LOADED:
      return {
        ...state,
        loading: false,
        testimonial: payload
      };

    case TESTIMONIAL_ERROR:
      return {
        ...state,
        loading: false,
        testimonial: null
      };

    default:
      return state;
  }
}

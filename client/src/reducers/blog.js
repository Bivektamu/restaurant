import { BLOG_LOADED, BLOG_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  blog: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BLOG_LOADED:
      return {
        ...state,
        loading: false,
        blog: payload
      };

    case BLOG_ERROR:
      return {
        ...state,
        loading: false,
        blog: null
      };

    default:
      return state;
  }
}

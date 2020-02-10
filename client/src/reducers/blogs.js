import { BLOGS_LOADED, BLOGS_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  blogs: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BLOGS_LOADED:
      return {
        ...state,
        loading: false,
        blogs: payload
      };

    case BLOGS_ERROR:
      return {
        ...state,
        loading: false,
        blogs: null
      };

    default:
      return state;
  }
}

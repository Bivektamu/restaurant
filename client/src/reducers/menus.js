import { MENU_LOADED, MENU_ERROR } from '../actions/types';

const initialState = {
  loading: true,
  menus: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case MENU_LOADED:
      return {
        ...state,
        loading: false,
        menus: payload
      };

    case MENU_ERROR:
      return {
        ...state,
        loading: false,
        menus: null
      };

    default:
      return state;
  }
}

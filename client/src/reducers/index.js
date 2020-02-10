import { combineReducers } from 'redux';

import banner from './banner';
import popular from './popular';
import offer from './offer';
import reservation from './reservation';
import recent from './recent';
import chefs from './chefs';
import testimonial from './testimonial';
import menus from './menus';
import navbar from './navbar';
import blogs from './blogs';
import blog from './blog';

export default combineReducers({
  banner,
  popular,
  offer,
  reservation,
  recent,
  chefs,
  testimonial,
  menus,
  navbar,
  blogs,
  blog
});

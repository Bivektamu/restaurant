import {
  BANNER_LOADED,
  BANNER_ERROR,
  POPULAR_ERROR,
  POPULAR_LOADED,
  OFFER_LOADED,
  OFFER_ERROR,
  RESERVATION_LOADED,
  RESERVATION_ERROR,
  RECENT_LOADED,
  RECENT_ERROR,
  CHEFS_ERROR,
  CHEFS_LOADED,
  TESTIMONIAL_LOADED,
  TESTIMONIAL_ERROR,
  MENU_ERROR,
  MENU_LOADED,
  NAVBAR_ERROR,
  NAVBAR_LOADED,
  BLOGS_ERROR,
  BLOGS_LOADED,
  BLOG_ERROR,
  BLOG_LOADED
} from './types';
import data from '../data';

export const getNavBar = from => dispatch => {
  try {
    const navData = data.filter(({ section }) => section === 'nav');

    dispatch({
      type: NAVBAR_LOADED,
      payload: navData
    });
  } catch (err) {
    dispatch({
      type: NAVBAR_ERROR
    });
  }
};

export const getBanner = from => dispatch => {
  try {
    if (!from) {
      from = 'home';
    }
    const sectionData = data.filter(({ section }) => section === from);
    const { banner } = sectionData[0];

    dispatch({
      type: BANNER_LOADED,
      payload: banner
    });
  } catch (err) {
    dispatch({
      type: BANNER_ERROR
    });
  }
};

export const getFeatured = () => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'home');
    const { popular } = sectionData[0];

    dispatch({
      type: POPULAR_LOADED,
      payload: popular
    });
  } catch (err) {
    dispatch({
      type: POPULAR_ERROR
    });
  }
};

export const getOffer = () => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'home');
    const { offer } = sectionData[0];

    dispatch({
      type: OFFER_LOADED,
      payload: offer
    });
  } catch (err) {
    dispatch({
      type: OFFER_ERROR
    });
  }
};

export const getReservation = () => dispatch => {
  try {
    const reservationData = data.filter(
      ({ section }) => section === 'reservation'
    );

    dispatch({
      type: RESERVATION_LOADED,
      payload: reservationData
    });
  } catch (err) {
    dispatch({
      type: RESERVATION_ERROR
    });
  }
};

export const getRecentBlogs = () => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'home');
    const { recent } = sectionData[0];

    dispatch({
      type: RECENT_LOADED,
      payload: recent
    });
  } catch (err) {
    dispatch({
      type: RECENT_ERROR
    });
  }
};

export const getChefs = () => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'about');
    const { chefs } = sectionData[0];

    dispatch({
      type: CHEFS_LOADED,
      payload: chefs
    });
  } catch (err) {
    dispatch({
      type: CHEFS_ERROR
    });
  }
};

export const getTestimonial = () => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'about');
    const { testimonials } = sectionData[0];

    dispatch({
      type: TESTIMONIAL_LOADED,
      payload: testimonials
    });
  } catch (err) {
    dispatch({
      type: TESTIMONIAL_ERROR
    });
  }
};

export const getMenus = () => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'menu');
    const { menus } = sectionData[0];

    dispatch({
      type: MENU_LOADED,
      payload: menus
    });
  } catch (err) {
    dispatch({
      type: MENU_ERROR
    });
  }
};

export const getBlogs = () => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'blogs');
    const { blogs } = sectionData[0];

    dispatch({
      type: BLOGS_LOADED,
      payload: blogs
    });
  } catch (err) {
    dispatch({
      type: BLOGS_ERROR
    });
  }
};

export const getBlogById = blog_id => dispatch => {
  try {
    const sectionData = data.filter(({ section }) => section === 'blogs');
    const { blogs } = sectionData[0];
    const Blog_By_Id = blogs.filter(({ id }) => id === parseInt(blog_id));

    dispatch({
      type: BLOG_LOADED,
      payload: Blog_By_Id
    });
  } catch (err) {
    dispatch({
      type: BLOG_ERROR
    });
  }
};

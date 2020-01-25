import React from 'react';
import Card from '../layout/Card';

const Blog = ({ recent }) => {
  return (
    <section id='blog'>
      <h5 className='small-heading'>Recent News</h5>
      <h2 className='heading'>Latest From Blog</h2>
      <Card items={recent} />
    </section>
  );
};

export default Blog;

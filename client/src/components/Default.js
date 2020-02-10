import React from 'react';

function Default() {
  return (
    <section id='default'>
      <div id='bug'>
        <img src='../img/bug.png' alt='bug' />
      </div>
      <div className='wrapper'>
        <h1 className='heading'>404</h1>
        <h1 className='title'>Page not found</h1>
        <p>We're sorry, the page you requested could not be found.</p>
      </div>
    </section>
  );
}

export default Default;

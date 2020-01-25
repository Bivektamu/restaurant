import React from 'react';

function Footer() {
  return (
    <footer>
      <section>
        <div className='flex-2'>
          <div>
            <h3>Restaurant</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h3>Open Hours</h3>
            <p>
              Monday
              <span className='ml-2'>10:00-24:00</span>
            </p>
            <p>
              Tuesday
              <span className='ml-2'>10:00-24:00</span>
            </p>
            <p>
              Wednesday
              <span className='ml-2'>10:00-24:00</span>
            </p>
            <p>
              Thursday
              <span className='ml-2'>10:00-24:00</span>
            </p>
            <p>
              Friday
              <span className='ml-2'>10:00-24:00</span>
            </p>
            <p>
              Saturday
              <span className='ml-2'>10:00-20:00</span>
            </p>
            <p>
              Sunday
              <span className='ml-2'>10:00-20:00</span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

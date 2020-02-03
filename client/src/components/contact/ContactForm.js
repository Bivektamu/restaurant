import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const { name, email, phone } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    window.alert(
      'Thank you for submitting your details ' +
        name +
        '. I will be in touch with you shortly. Kind Regards, Bivek Jang Gurung'
    );
  };
  return (
    <section id='contact-form'>
      <div className='wrapper'>
        <h1 className='heading'>Get in Touch</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className='wrapper '>
            <label htmlFor='Name'>Name</label>
            <input
              required
              type='text'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='wrapper'>
            <label htmlFor='email'>email</label>
            <input
              required
              type='text'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='wrapper'>
            <label htmlFor='phone'>phone</label>
            <input
              required
              type='phone'
              name='phone'
              value={phone}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='wrapper'>
            <label htmlFor='mesage'>Message</label>
            <textarea></textarea>
          </div>

          <input type='submit' className='button submit' value='Submit' />
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

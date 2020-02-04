import React, { useState } from 'react';
import ReactModal from 'react-modal';
import Popup from '../layout/Popup';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [showModal, toggleModal] = useState(false);

  const { name, email, phone } = formData;

  ReactModal.setAppElement('#root');

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    toggleModal(true);
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
      <ReactModal
        className='modal'
        isOpen={showModal}
        contentLabel='Minimal Modal Example'
      >
        <Popup
          title='Thank You'
          text={`Thank you for submitting your details ${name}. I will be in touch with you shortly.Kind Regards, Bivek Jang Gurung`}
        />
      </ReactModal>
    </section>
  );
}

export default ContactForm;

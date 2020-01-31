import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    person: null
  });

  const { name, email, phone, date, time, person } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    window.alert(
      'Thank you for your booking ' + name + '. See you soon on ' + date
    );
  };

  return (
    <section id='booking-form'>
      <h1 className='heading'>Make Reservation</h1>
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
          <label htmlFor='date'>Pick date</label>
          <input
            required
            type='date'
            name='date'
            value={date}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='wrapper'>
          <label htmlFor='time'>pick time</label>
          <select required name='time' value={time} onChange={e => onChange(e)}>
            <option value='10'>10:00am</option>
            <option value='12'>12:00pm</option>
            <option value='14'>2:00pm</option>
            <option value='16'>4:00pm</option>
            <option value='18'>6:00pm</option>
            <option value='20'>8:00pm</option>
            <option value='22'>10:00pm</option>
            <option value='24'>12:00am</option>
          </select>
        </div>
        <div className='wrapper'>
          <label htmlFor='person'>person</label>
          <select
            required
            name='person'
            value={person}
            onChange={e => onChange(e)}
          >
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>
        <input type='submit' className='button submit' value='Submit' />
      </form>
    </section>
  );
}

export default BookingForm;

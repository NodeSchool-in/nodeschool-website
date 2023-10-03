import React, { useState } from 'react';
import Style from '../../styles/ContactForm.module.css';
import { api_postContact } from '../ApiOperation/ApisManagement/Contact';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [showName, setShowname] = useState('');

  const handleSubmit = async () => {
    if (
      firstName.trim().length == 0 ||
      lastName.trim().length == 0 ||
      email.trim().length == 0 ||
      phone.trim().length == 0 ||
      query.trim().length == 0
    ) {
      setError('Please enter all details');
    } else {
      let data = await api_postContact(
        firstName,
        lastName,
        email,
        phone,
        query
      );
      console.debug(data);
      if (data?.data?.statusId == 1) {
        setShowname(data?.data?.data?.firstName);
      } else {
        setError('Something went wrong, Please try again later');
      }
    }
  };

  return (
    <div className={Style.contactArea}>
      <div className='f30'>
        <span className='color-red'>#</span> Contact
      </div>
      <div className={Style.contactContainer}>
        <div className={Style.contactForm}>
          <div className={Style.nameSection}>
            <input
              type='text'
              name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First Name'
              className={Style.nameInp}
            />
            <input
              type='text'
              name='lastName'
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last Name'
              className={Style.nameInp}
            />
          </div>
          <div className={Style.otherInputCont}>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className={Style.inpCont}
            />
            <input
              type='number'
              name='phone'
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Mobile No.'
              className={Style.inpCont}
            />
            <textarea
              type='text'
              name='query'
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Enter your Query'
              className={Style.inpCont2}
            />
            {error?.length > 0 && (
              <span className='color-red' style={{ fontSize: '12px' }}>
                {error}
              </span>
            )}
            <button className={Style.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className={Style.contactResponseForm}>
          <h2>
            {showName.length > 0
              ? `Thank you ${showName}`
              : 'Please write your Query'}
          </h2>
          <h5>We will contact you withn 24 hours</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

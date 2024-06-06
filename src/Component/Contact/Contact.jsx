import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <div className="contact_container">
        <div className="content">
          <h2>#Contact Us</h2>
          <div className="form">
            <form action="" method='Post'>
              <input type="text" name='Name' value='' placeholder='Enter Your Full Name'required />
              <input type="email" name='Email' value='' placeholder='Enter Your Email'required />
              <input type="text" name='Subject' value='' placeholder='Enter Your Subject'required />
              <textarea name="Message" id="" value='' placeholder='Enter Your Message'>
              </textarea>
              <button type='submit'>submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
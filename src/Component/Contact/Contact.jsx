import React from 'react';
import './Contact.css';
const Contact = () => {
  return (
    <div>
      <div className="contact_container">
        <div className="content">
          <div className="form">
            <form action="" method='Post'>
              <input type="text" name='Name' value='' placeholder='Enter Your Full Name'required />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
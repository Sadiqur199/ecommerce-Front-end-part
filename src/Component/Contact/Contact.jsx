import React, { useState } from 'react';
import './Contact.css';
const Contact = () => {
  const [user,setUser] = useState(
    {
      Name:'',Email:'',Subject:'',Message:''
    }
  )
  let Name,value
  const data = (e) =>{
    Name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
  }
  return (
    <div>
      <div className="contact_container">
        <div className="content">
          <h2>#Contact Us</h2>
          <div className="form">
            <form action="" method='Post'>
              <input type="text" name='Name' value={user.Name} placeholder='Enter Your Full Name'required onChange={data}/>
              <input type="email" name='Email' value={user.Email} placeholder='Enter Your Email'required onChange={data}/>
              <input type="text" name='Subject' value={user.Subject} placeholder='Enter Your Subject'required onChange={data}/>
              <textarea name="Message" id="" value={user.Message} placeholder='Enter Your Message' onChange={data}>
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
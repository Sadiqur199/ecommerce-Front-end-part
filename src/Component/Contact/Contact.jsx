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
    setUser({...user, [Name]: value})
  }
  const SendData = async(e) =>{
    const {Name,Email,Subject,Message} = user
    e.preventDefault()
    const options = {
      method: "POST",
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        Name,Email,Subject,Message
      })
    }
   try{
    const res = await fetch('    https://e-project-a10b0-default-rtdb.firebaseio.com/Message.json',options)
    console.log(res)
    if(res.ok){
      alert("Message Sent Successful")
      setUser(    {
        Name:'',Email:'',Subject:'',Message:''
      })
    }
    else{
      alert("Message Not Send")
    }
  }
  catch(error){
    console.error("Error sending Message",error)
  }
   }
  return (
    <div>
      <div className="contact_container">
        <div className="content">
          <h2>#Contact Us</h2>
          <div className="form">
            <form  method='Post' onSubmit={SendData}>
              <input type="text" name='Name' value={user.Name} placeholder='Enter Your Full Name'required onChange={data}/>
              <input type="email" name='Email' value={user.Email} placeholder='Enter Your Email'required onChange={data}/>
              <input type="text" name='Subject' value={user.Subject} placeholder='Enter Your Subject'required onChange={data}/>
              <textarea name="Message" id="" value={user.Message} placeholder='Enter Your Message' onChange={data}>
              </textarea>
              <button type='submit' onClick={SendData}>submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
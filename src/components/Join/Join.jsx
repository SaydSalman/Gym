import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Join.css"

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jk9ayvi', 'template_25309ls', form.current, 'UJQUxbU19450auMdT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='Join' id='join-us'>
      <div className="left-j">
      <hr/>
        <div>
        <span className='stroke-text'>READY TO</span>
        <span>LEVEL UP</span>
        </div>
        <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'>WITH US?</span>
        </div>

      </div>
      <div className="right-j">
        <form ref={form}  className='email-container' onSubmit={sendEmail}>
            <input type="email" name="from_name" placeholder='Enter your Email Address' id="" />
            <button className='btn btn-join'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join

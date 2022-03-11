import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';
import './contact.scss';

function Contact() {

  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_29s32lg', 'template_atde97a', form.current, 'f_KhNgMd1jd-fYVMI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()

    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <div className="contactTitleContainer">
          <h2>Contact</h2>
        </div>
        <div className="formContainer">
          <form onSubmit={sendEmail} ref={form}>
            <div className="inputContainer">
              <input type="text" placeholder='Name' name="name"/>
            </div>
            <div className="inputContainer">
              <input type="text" placeholder='Email' name="email"/>
            </div>
            <div className="inputContainer">
              <input type="text" placeholder='Subject' name="subject"/>
            </div>
            <div className="inputContainer">
              <textarea placeholder='Message' name="message"></textarea>
            </div>
            <div className="inputContainer">
              <button type="suibmit">Send</button>
            </div>
            {message && <span>Thanks! I'll reply ASAP.</span>}
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
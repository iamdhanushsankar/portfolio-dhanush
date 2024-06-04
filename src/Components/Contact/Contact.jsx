import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e15a5326-ba4a-4d30-9ee5-a42f8949746e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        window.location.reload();  
         
        if (res.success) {
          alert(res.message)
        }
      };


  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Have a question? Want to work together? 
                    Just want to say hi? I'd love to hear from you.</p>
                <div className="contact-detials">
                    <div className="contact-detial">
                    <img src={location_icon} alt=''/>
                    <p>iamdhanushsankar@gmail.com</p>
                    </div>
                    <div className="contact-detial">
                    <img src={mail_icon} alt=''/>
                    <p>+91 8760608647</p>
                    </div>
                    <div className="contact-detial">
                    <img src={call_icon} alt=''/>
                    <p>No.9, Sri Ram Extension,
                        Phase 3, Sathuvachari, Vellore-632009, India.</p>
                    </div>    
                </div>    
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type="text" placeholder="Enter your name" name='name' />
                <label htmlFor=''>Your Email</label>
                <input type="email" placeholder="Enter your email" name='email' />
                <label htmlFor=''>Your Message</label>
                <textarea name="message" rows="10" placeholder="Enter Your Message"></textarea>
                <button type="submit" className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
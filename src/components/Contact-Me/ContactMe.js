import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6y92fvr', 'template_gglat5b', form.current, 'user_dps0IVFyqE3pSzPj01YSZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className='container'>
            <h1 className='text-center'>GET IN TOUCH</h1>
            <div className='row gx-0'>
                <div className="col-lg-5">
                    <div>
                        <h1>What's your story?</h1>
                        <h2>Get in touch</h2>
                        <p>Always available for frelancing if the right project comes along Feel free to contact me.</p>
                    </div>
                </div>
                <div className="col-lg-7">
                <form ref={form} onSubmit={sendEmail}>
                   
                    <input placeholder='YOUR NAME' type="text" name="user_name" />
                    
                    <input placeholder='YOUR EMAIL' type="email" name="user_email" />
                    
                    <input placeholder='SUBJECT' type="text" name="user_subject" id="" />

                    <textarea placeholder='YOUR MESSAGE' name="message" />

                    <input type="submit" value="Send" />
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
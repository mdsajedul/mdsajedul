import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactMe.css'


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
        <div id='contact' className='container my-3 px-2'>
            <h1 className='text-center mb-3'>GET IN TOUCH</h1>
            <div className='row gx-0'>
                <div className="col-lg-5">
                    <div>
                        <h3>What's your story?</h3>
                        <h5>Get in touch</h5>
                        <p>Always available for frelancing if the right project comes along Feel free to contact me.</p>
                        <div>
                            <p><i class="fas fa-map-marker-alt"></i> Dhaka, Bangladesh</p>
                            <p><i class="fas fa-envelope-open-text"></i> sajedulislms@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 px-3">
                <form ref={form} onSubmit={sendEmail}>

                    <div className='row gx-0'>

                        <div className="col-lg-6 p-1">
                            <input placeholder='YOUR NAME' type="text" name="user_name" />
                        </div>

                        <div className="col-lg-6 p-1">
                            <input placeholder='YOUR EMAIL' type="email" name="user_email" />
                        </div>

                    </div>
                   
                   <div className="p-1">
                        <input placeholder='SUBJECT' type="text" name="user_subject" id="" />
                   </div>
                    
                    <div className='p-1'>
                        <textarea placeholder='YOUR MESSAGE' name="message" />
                    </div>

                    <div className="p-1">
                        <input type="submit" value="Send" />
                    </div>

                   
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
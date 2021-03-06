import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactMe.css'
import toast, { Toaster } from 'react-hot-toast';



const ContactMe = () => {
    const form = useRef();
 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6y92fvr', 'template_gglat5b', form.current, 'user_dps0IVFyqE3pSzPj01YSZ')
          .then((result) => {
                if(result.text==="OK"){
                    toast.success('Mail Sent')
                }
          }, (error) => {
              if(error){
                  toast.error('Mail not sent, Please try agin later!')
              }
          });
      };

    return (
        <div id='contact' className='container my-3 px-2'>


            <h1 className='text-center mb-3'>GET IN TOUCH</h1>
            <Toaster/>
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
                            <input placeholder='YOUR NAME' type="text" name="name" required />
                        </div>

                        <div className="col-lg-6 p-1">
                            <input placeholder='YOUR EMAIL' type="email" name="email" required/>
                        </div>

                    </div>
                   
                   <div className="p-1">
                        <input placeholder='SUBJECT' type="text" name="subject" id="" required/>
                   </div>
                    
                    <div className='p-1'>
                        <textarea placeholder='YOUR MESSAGE' name="message" required/>
                    </div>

                    <div className="p-1">
                        {/* <input className='btn-contact-me' type="submit" value="Send " /> */}
                        <button type="submit" className='btn-contact-me w-100'>SEND <i class="fas fa-paper-plane"></i></button>
                    </div>

                   
                </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
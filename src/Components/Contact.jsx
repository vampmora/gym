import React from 'react';
   import emailjs from '@emailjs/browser';


function Contact() {

    // const sendEmail = (e)=>{
    //     alert('email sent'); 
         
    //     emailjs.sendForm('service_9vlcpst","template_9p4mxsb', e.target , 'P0iq5FbM_a99KwTQE'  )
    //  }


    const sendEmail = (e)=>{
        alert('Your Email has been sent');

        emailjs.sendForm('service_9vlcpst', 'template_uvy7axj', e.target, 'P0iq5FbM_a99KwTQE')
    }


  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form action="" onSubmit={sendEmail}>
            <input type="text" placeholder='Full Name' required />
            <input type="email" name='email_from' placeholder='Write Your Email' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Write Your Message'></textarea>
            <input type="submit" value='Send' />
        </form>
      
    </div>
  )
}

export default Contact;

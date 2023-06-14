     
import Script from 'next/script';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'
import ReCAPTCHA from "react-google-recaptcha";
import Recaptcha from 'react-google-recaptcha/lib/recaptcha';
import { useRef } from 'react';

import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i3b41wb', 'template_zeri4q7', form.current, 'S6kwfmLLLuI8qHsR0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const recaptchaRef = React.createRef();
  const [disable, setDisable] = useState(false);
  const [captchaValue, SetCaptchaValue] =useState("");

  function onChange(value) {
    console.log("Captcha value:", value);
    SetCaptchaValue(value)
  }

  useEffect( () => {

 
  if (captchaValue !== ""){
    setDisable(true);
  }
}, [captchaValue])

  return (

      <div id="contact" className="flex  justify-center mt-4">

    <form id='form' ref={form} onSubmit={sendEmail} className='text-center justify-center mb-12 w-[80vw]'>
    
	  
      <input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
      <MDBInput label='Name' name="full_name" v-model='user_name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' name="user_email" v-model='email' wrapperClass='mb-4' />

      <select name="type" placeholder="Select move type" className="p-2 rounded-2xl border-1 w-full">
        <option></option>
        <option name='House'>House</option>
        <option name='Apartment'>Apartment</option>
        <option name='Office'>Office</option>
        <option name='Interstate'>Interstate</option>
      </select>
      <div>Select your job type</div> 
      
      <MDBTextArea wrapperClass='mb-4 mt-4' name="message" label='Job details (location, date, rooms, items, access)' />

      <MDBInput label='Mobile' v-model='Mobile' name="mobile" wrapperClass='mb-4' />
      <ReCAPTCHA sitekey="6LdaZjAmAAAAAPsBlxUgkxR_kH65xVXDZLPsbguB"
                secretkey="6LdaZjAmAAAAABZYvPKjMz81k0OoYzEREXHDlhQg"
                onChange={onChange}
      />
      {disable ? <MDBBtn color='primary' type="submit" value="Send" block className='my-4'>
        Send
      </MDBBtn> : <></>}
    </form>
    </div>
  );
}
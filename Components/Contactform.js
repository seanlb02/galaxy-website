     

import React from 'react';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'

export default function Contact() {


// const handlesubmit = function(e) {
//     // e.preventDefault();
//     Swal.fire(
//         'Message sent!',
//         'Thanks for getting in touch. Expect a response within 2 days, or feel free to give us a call.',
//         'success'
//       )
// }

  return (
      <div id="contact" className="flex  justify-center mt-4">
    <form id='form'  className='text-center mb-12 w-[80vw]' method="POST" action="https://api.web3forms.com/submit" >
      
    <input type="hidden" name="recaptcha_response" id="recaptchaResponse">
      <input type="hidden" name="apikey" value="a1b9b123-ed95-4e08-a5bf-a214085534a1"/>

      <MDBInput label='Name' name="full_name" v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' name="email" v-model='email' wrapperClass='mb-4' />


      <MDBTextArea wrapperClass='mb-4' name="details" label='Job details (location, date, rooms, items, access)' />

      <MDBInput label='Mobile' v-model='Mobile' name="mobile" wrapperClass='mb-4' />

      <MDBBtn  color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
  );
}
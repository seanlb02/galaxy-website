     

import React from 'react';
import { MDBInput, MDBTextArea, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2'

export default function Contact() {


const handlesubmit = function(e) {
    e.preventDefault;
    Swal.fire(
        'Message sent!',
        'Thanks for getting in touch. Expect a response within 2 days, or feel free to give us a call.',
        'success'
      )
}

  return (
      <div id="contact" className="flex justify-center">
    <form id='form' className='text-center  w-[80vw]' onSubmit={handlesubmit}>
      
      <div className="text-2xl mb-12">Contact us</div>

      <input type="hidden" name="access_key" value="a1b9b123-ed95-4e08-a5bf-a214085534a1"/>

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Job type' v-model='Mobile' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Job details (location, rooms, items, access ...)' />

      <MDBBtn color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </form>
    </div>
  );
}
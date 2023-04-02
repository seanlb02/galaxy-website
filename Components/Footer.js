import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Image from 'next/image';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' fixed="bottom" className='bg-dark text-center text-lg-start text-muted'>
      <section id="contact" className='d-flex justify-content-center  p-4 border-bottom'>
    
      <div className="flex justify-center lg:justify-center text-2xl gap-2 text-white">
                <MDBIcon icon="phone" className="" /><Image height={25} width={25} src="/phonewhite.png"></Image>Call  0404966779
              </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Galaxy Removals 
              </h6>
              <p>
                35 Years experience operating all across Sydney with a focus on the Eastern and Northern suburbs.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='/pricing' className='text-reset'>
                  Residential relocations
                </a>
              </p>
              <p>
                <a href='/pricing' className='text-reset'>
                  Storage solutions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Office moves
                </a>
              </p>
              <p>
                <a href='/pricing' className='text-reset'>
                  Interstate relocations
                </a>
              </p>
              <p>
                <a href='/pricing' className='text-reset'>
                  Packing 
                </a>
              </p>
            </MDBCol>



            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Alexandria, NSW 2015, SYDNEY
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                galaxyremovals@myoffice.net.au
              </p>
              
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Galaxy Removals, 2023
       
      </div>
    </MDBFooter>
  );
}
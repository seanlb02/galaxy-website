import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Image from 'next/image';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' fixed="bottom" className='bg-dark text-center text-lg-start text-muted'>
      <section id="contact" className='d-flex justify-content-center  p-4 border-bottom'>
    
      <div className="flex justify-center lg:justify-center text-2xl gap-2 text-white">
                <MDBIcon icon="phone" className="" /><Image alt="phone icon" height={25} width={25} src="/phonewhite.png"></Image>Call  0404966779
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
                35 Years experience operating all across the Sydney Metro. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                  Residential relocations
              </p>
              <p>
                  Storage solutions
              </p>
              <p>
                  Office moves
              </p>
              <p>
                  Interstate relocations
              </p>
              <p>
                  Packing 
              </p>
            </MDBCol>



            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Alexandria, NSW 2015, SYDNEY
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
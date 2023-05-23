import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import NavTab from '@/Components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardGrid from '@/Components/CardGrid'
import Footer from '@/Components/Footer' 
// import style from '../styles/Home.module.css'
import RatesGrid from '@/Components/RatesGrid'
import Contact from '@/Components/Contactform';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

// import dynamic from "next/dynamic";
// const Animator = dynamic(
//   import("react-scroll-motion").then((it) => it.Animator),
//   { ssr: false }
// );



// import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <link rel="icon" href='/iconlogo.svg'/>
    </Head>
      <NextSeo
        title="Galaxy Removals Sydney | Removals, Storage, Packing, Interstate"
        description="Over 30 years of operation across the Sydney metro. Trusted experts in residential and commercial moves, packing, storage and interstate. Get a free quote today."
        // name="viewport" content="width=device-width, initial-scale=1"
        // {/* <link rel="icon" href="/favicon.ico" />
        // <link href="../styles/Home.module.css" rel="stylesheet"/> */}
      />

    <NavTab className={styles.nav}/>
      <main>
        
          <div className={styles.pageContainer}>
            <div className=" z-40 relative">
              <section className={styles.heroContainer}>
                {/* <div className="relative w-[40vw] flex flex-col"> */}
                <div className={styles.mobilehero}>Big move?</div>

                  <div className={styles.hero}>We handle the <span id="cycle"></span> <br></br>so <em>he</em> doesn&apos;t have to</div>
                  
                      <div className='transition-w ease-in bg-blue-500 absolute z-40 mt-24 md:text-2xl xs:text-lg lg:w-2/5 w-5/5 md:w-4/5 lg:bottom-16 md:bottom-0 md:rounded-tr-full shadow lg:drop-shadow-2xl drop-shadow-md xs:-bottom-24 text-white flex p-2 lg:p-6 h-36 lg:h-64 md:h-48 align-center rounded-br-3xl'>
                        <div className="curser-pointer text-2xl md:text-3xl lg:text-4xl font-serif text-white-600 md:mt-8 lg:mt-16 ">Removals | Storage | Packing | Interstate | Commercial</div>
                        <div className="flex absolute text-white-500 m-3 ml-12 bottom-0 lg:px-12 px-1 lg:text-2xl text-md text-center cursor-pointer lg:visible -left-0 md:left-0 border-1 border-slate-200 transition ease-in-out duration-300 hover:-translate-y-1 rounded-full px-0 text-md font-gudea "><Image height={25} width={25} src="/phonewhite.png"></Image>02 9664 6641</div>

                        <div className="absolute border-2 text-slate-500 bg-white xs:m-2 lg:ml-12 xs:ml-5 mb-3 bottom-0 lg:w-auto lg:px-16 px-2 xs:h-auto lg:text-2xl text-md text-center cursor-pointer right-10 md:left-64 border-1 border-slate-200 transition ease-in-out duration-300 hover:-translate-y-1 rounded-full  text-md font-gudea "><Link href="/#contact">Get A Quote</Link></div>
                    
                      </div>
                  

                {/* </div> */}
                  
                

                  <div><Image className={styles.dogImage} alt="Dog standing in a moving box" height={2800} width={4000} src="/dogHero.jpg"></Image></div>
              </section>
            </div>
            {/* <ScrollContainer>
            <ScrollPage className="block"> */}
            <section className={styles.bio}>
            
              {/* <Animator animation={batch(FadeIn(), Move(), Sticky())}> */}

                  <div id="exp" className={styles.experience}>100% owner-operated for over 30 years </div>
              {/* </Animator> */}

            
            
            </section>
            {/* </ScrollPage>
            </ScrollContainer> */}
            
            <Container id="services" className="lg:p-10 font-serif xs:p-0 m-0 rounded-t-3xl flex flex-col mt-4 " fluid xs={{ gutter: 0 }}>
                <Row xs={{ gutter: 0 }}  noGutters={true} className="pr-0 mb-5 gutter-x-0 flex-1 grow">
                  <Col xs={12} md={6} className=" d-flex flex-col h-96 justify-center xs:bg-blue-50 lg:bg-white p-8">
                    <Fade bottom>
                      <div className={styles.sectionTitle}>House & Apartment Relocations</div>
                      <ul className={styles.sectionList}>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Residental moves of all sizes </li>
                         <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Difficult access consultation</li>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Range of rates avaliable</li>
                      </ul>
                      <div className={styles.buttonContainer}>
                      </div>
                    </Fade>
                  </Col>
                  <Col xs={12} md={6} className="px-0 relative">
                    <Image className={styles.storeImage} alt="open boxes" height={200} width={400} src="/openbox.jpg"></Image>
                    <div className='bg-blue-500 z-40 font-gudea absolute md:top-10 xs:top-5  text-white lg:p-6 xs:p-4 cursor-pointer rounded-r-3xl'><a href="/#pricing">Inquire about rates</a></div>
                  </Col>
                </Row>

                <Row xs={{ gutter: 0 }} noGutters={true} className="d-flex flex-1  mb-4 flex-row-reverse grow">
                  <Col xs={12} md={6} className=" d-flex flex-col justify-center h-96 xs:bg-yellow-50 lg:bg-white p-8">
                    <Fade bottom>
                      <div className={styles.sectionTitle}>Local self-storage <strong>experts</strong> </div>
                      <ul className={styles.sectionList}>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Short-term and long-term solutions</li>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>7-day-a-week access</li>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>All sized units avaliable</li>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>All move-in logistics handled by us</li>
                      </ul>
                      <div className={styles.buttonContainer}>
                      </div>
                    </Fade>
                  </Col>
                  <Col xs={12} md={6} className="px-0 z-1 relative">
                    <Image className={styles.storeImage} alt="self-storage units" height={200} width={400} src="/storage.jpg"></Image>
                    <div className='bg-blue-500 z-40 font-gudea absolute md:top-10 xs:top-5  right-0 text-white lg:p-6 xs:p-4 cursor-pointer rounded-l-3xl'><a href="/#contact">Inquire about storage</a></div>

                  </Col>
                </Row>

                <Row lg={{ gutter: 0 }}  noGutters={true} className=" flex-1  mb-4 grow ">
                  <Col xs={12} md={6} className="d-flex flex-col justify-center xs:bg-blue-50 lg:bg-white h-96 p-8">
                  <Fade bottom>
                      <div className={styles.sectionTitle}>Office & Warehouse Relocations</div>
                      <ul className={styles.sectionList}>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Office moves of all sizes</li>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Small warehouse relocations</li>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Difficult access consultation</li>
                        <li className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image>Call to organise a free quote</li>
                      </ul>
                      <div className={styles.buttonContainer}>
                      </div>
                  </Fade>
                  </Col>
                  <Col xs={12} md={6} className="px-0 relative">
                    <Image className={styles.storeImage} alt="office space" height={200} width={400} src="/office.jpg"></Image>
                  <div className='bg-blue-500 z-40 font-gudea absolute md:top-10 xs:top-5 text-white lg:p-6 xs:p-4 cursor-pointer rounded-r-3xl'><a href="/#contact">Get office quote</a></div>
                  </Col>
                </Row>

                <Row xs={{ gutter: 0 }} noGutters={true}  className=" rounded-3xl d-flex flex-row-reverse flex-1 grow">
                  <Col xs={12} md={6} className=" d-flex flex-col justify-center h-96 xs:bg-yellow-50 lg:bg-white p-6">
                    <Fade bottom>
                      <div className={styles.sectionTitle}>Packing & Unpacking</div>
                      <ul className={styles.sectionList}>
                        <div className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image><li className="flex gap-3 align-center items-center">Either full house or last minute bits</li></div>
                        <div className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image><li className="flex gap-3 align-center items-center">Standard rates apply</li></div>
                        <div className="flex gap-3 align-center items-center"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image><li className="flex gap-3 align-center items-center">Free boxes, paper & tape rental</li></div>
                        <div className="flex gap-3 align-center items-center w-full"><Image alt="tick" className={styles.tick} height={40} width={40} src="/tick.png"></Image><div>Port-a-robes provided on moving day</div></div>

                      </ul>
                       </Fade>
                      <div className={styles.buttonContainer}>
                      </div>
                  </Col>
                  <Col xs={12} md={6}  className="px-0 relative">
                    <Image className={styles.storeImage} alt="person packing boxes" height={200} width={400} src="/packing.jpg"></Image>
                    <div className='bg-blue-500 z-40 font-gudea absolute md:top-10 xs:top-5  right-0 text-white lg:p-6 xs:p-4 cursor-pointer rounded-l-3xl'><a href="/#contact">Let's talk packing</a></div>

                  </Col>
                </Row>

            </Container>
           

            <section className="bg-yellow-100 rounded-l-full">
            <div id="exp" className={styles.experience2}>Special Packages</div>

            <CardGrid className="p-4 mb-8"/>
            </section >

            <div id="pricing" className={styles.header}>Pricing Information</div>            

            <RatesGrid />
              <div className="flex bg-blue-100 flex-col lg:flex items-center align-center w-full gap-10 rounded-r-full">
              <section className={styles.quoteSection}>
                    

                    <div className={styles.quoteTitle}>Not sure about what you need?</div>
                    <div className={styles.quoteButton}><Image src="/phonewhite.png" alt="phone icon" width={20} height={20}></Image>Call 0404966779</div>
                    <div id="rates" className={styles.quoteText}>Give us a call or complete the form below and we will get back to you as soon as possible</div>
            

        </section>
     
        <Contact/>
        </div>

            {/* <div><Image src="/boxlogo.jpg" width={50} height={200}/></div> */}
            <Footer className={styles.footer}/>
          </div>
          
          

      </main>
      
      
    </>
  )
}

const styles = {
  pageContainer: " h-[100vh] w-[100vw] flex flex-col overflow-x-hidden",

  heroContainer: "mt-20 h-contain w-contain ",
  dogImage: "w-full h-full z-0",
  hero: "font-serif bold hidden md:block absolute text-2xl top-56 pl-9 md:text-4xl lg:text-5xl pl-5 md:left-6 lg:pl-6 lg:left-16 lg:top-72 ",
  mobilehero: "font-serif bold  md:hidden absolute text-2xl top-40 pl-8 xs:text-3xl md:text-4xl lg:text-5xl pl-5 md:left-6 lg:pl-6 lg:left-16 lg:top-72 ",

  heroTab: " border-2 right-0 h-72 w-2/5 bg-blue-400 rounded-2xl",

  bio: "lg:bg-yellow-50 xs:bg-yellow-100 rounded-r-full",
  experience: "font-serif flex items-center py-18 mb-4 md:pt-24 xs:mt-18 xs:mt-8 pt-36 pb-2 lg:pb-6 md:text-left text-left text-4xl lg:text-5xl lg:mx-5 xs:mx-4 xs:text-center lg:text-4xl word-wrap",
  experience2: "font-serif flex items-center py-18 mb-4 md:pt-8 xs:mt-8 pt-24 pb-12 md:text-left text-left text-4xl lg:text-5xl lg:mx-5 xs:mx-4 xs:text-center lg:text-4xl word-wrap",

  // storageContainer: " flex flex-col w-[100vw] h-full lg:flex-row bg-yellow-100",
  //   section: "flex flex-1 flex-col mt-12 text-left",
      sectionTitle: " font-serif text-center text-3xl sm:text-4xl lg:text-4xl mb-12",
      sectionList: "font-gauda xs:text-xl lg:text-2xl text-left gap-4 justify-center align-center",

    storeImage: "flex md:h-96 xs:h-56 w-full object-cover   ",
    buttonContainer: "flex justify-center items-center w-full mt-8",
    imageButton: "font-gudea bottom-20 left-56 w-fit p-2 rounded-2xl bg-blue-400 text-white ",
  tick: "min-w-40px min-h-40px",
    header: "font-serif text-4xl p-12 pl-6 pb-2 text-left md:pl-12",
    header2: "text-3xl px-12 pb-2 text-left ",
    quoteTitle: "text-3xl text-center px-0 lg:px-12 sm:px-0",
    quoteText: " px-3 lg:px-12 text-center",
    quoteSection: "flex gap-12 pt-16 flex-col lg:w-1/2 w-full justify-center items-center",
    quoteButton: "flex gap-2 bg-blue-500 rounded-2xl border-4 border-yellow-50 text-white cursor-pointer p-3"

  // interstateContainer: "flex w-[100vw] h-full flex-col lg:flex-row-reverse bg-blue-100",
}

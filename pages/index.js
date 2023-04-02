import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NavTab from '@/Components/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardGrid from '@/Components/CardGrid'
import Footer from '@/Components/Footer' 
// import style from '../styles/Home.module.css'

import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);



import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { NextSeo } from 'next-seo';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextSeo
        title="Galaxy Removals Sydney"
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
                  <div className={styles.hero}>We handle the <span id="cycle"></span> <br></br>so <em>he</em> doesn&apos;t have to</div>
                  
                      <div className='transition-w ease-in bg-blue-500 absolute z-40 mt-24 md:text-2xl xs:text-lg lg:w-2/5 w-5/5 md:w-4/5 lg:bottom-16 md:bottom-0 md:rounded-tr-full shadow lg:drop-shadow-2xl drop-shadow-md xs:-bottom-24 text-white flex p-2 lg:p-6 h-36 lg:h-64 md:h-48 align-center rounded-br-3xl'>
                        <div className="curser-pointer text-2xl md:text-3xl lg:text-4xl font-serif text-white-600 md:mt-8 lg:mt-16 ">Removals | Storage | Packing | Interstate | Commercial</div>
                        <div className="flex absolute text-white-500 m-3 ml-12 bottom-0 lg:px-12 px-1 lg:text-2xl text-md text-center cursor-pointer lg:visible -left-0 md:left-0 border-1 border-slate-200 transition ease-in-out duration-300 hover:-translate-y-1 rounded-full px-0 text-md font-gudea "><Image height={25} width={25} src="/phonewhite.png"></Image>02 9664 6641</div>

                        <div className="absolute border-2 text-slate-500 bg-white m-3 ml-14 bottom-0 lg:px-18 px-2 lg:text-2xl text-md text-center cursor-pointer left-56 md:left-64 border-1 border-slate-200 transition ease-in-out duration-300 hover:-translate-y-1 rounded-full  text-md font-gudea ">Get A Quote</div>
                    
                      </div>
                  

                {/* </div> */}
                  
                

                  <div><Image className={styles.dogImage} height={2800} width={4000} src="/dogHero.jpg"></Image></div>
              </section>
            </div>
            {/* <ScrollContainer>
            <ScrollPage className="block"> */}
            <section className={styles.bio}>
            
              {/* <Animator animation={batch(FadeIn(), Move(), Sticky())}> */}
                  <div id="exp" className={styles.experience}>100% owner-operated for almost 35 years </div>
              {/* </Animator> */}

            <CardGrid className="p-4 mb-8"/>
            
            </section>
            {/* </ScrollPage>
            </ScrollContainer> */}
            <Container  className="p-8 m-0 flex flex-col mt-4 shadow drop-shadow-xl" fluid xs={{ gutter: 0 }}>
                <Row xs={{ gutter: 0 }}  noGutters={true} className="pr-0 gutter-x-0 flex-1 grow">
                  <Col xs={12} md={6} className="d-flex flex-col justify-center bg-blue-50 p-12">
                      <div className={styles.sectionTitle}>House and apartment relocations</div>
                      <ul className={styles.sectionList}>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Residental moves of all sizes and complexities</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Free box rental</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Difficult access consultation</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Range of rates avaliable</li>
                      </ul>
                      <div className={styles.buttonContainer}>
                          <div className={styles.imageButton}><a href="/pricing#contact"><strong>Let&apos;s talk moving</strong></a></div>
                      </div>
                  </Col>
                  <Col xs={12} md={6} className="px-0 relative">
                    <Image className={styles.storeImage} height={200} width={400} src="/openbox.jpg"></Image>
                    <div className='bg-blue-400 z-40 font-gudea absolute top-10 text-white p-6 cursor-pointer rounded-r-3xl'><a href="/pricing#rates">Check our rates</a></div>
                  </Col>
                </Row>

                <Row xs={{ gutter: 0 }} noGutters={true} className="d-flex flex-1 flex-row-reverse grow">
                  <Col xs={12} md={6} className=" d-flex flex-col justify-center bg-yellow-50 p-12">
                      <div className={styles.sectionTitle}>Local self-storage <strong>experts</strong> </div>
                      <ul className={styles.sectionList}>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Short-term and long-term solutions</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>7-day-a-week access</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>All sized units avaliable</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>All move-in logistics handled by us</li>
                      </ul>
                      <div className={styles.buttonContainer}>
                          <div className={styles.imageButton}><a href="/pricing#contact"><strong>Let&apos;s talk storage</strong></a></div>
                      </div>
                  </Col>
                  <Col xs={12} md={6} className="px-0">
                    <Image className={styles.storeImage} height={200} width={400} src="/storage.jpg"></Image>
                  </Col>
                </Row>

                <Row lg={{ gutter: 0 }}  noGutters={true} className="flex-1 grow ">
                  <Col xs={12} md={6} className="d-flex flex-col justify-center bg-blue-50 p-12">
                      <div className={styles.sectionTitle}>Office and warehouse relocations</div>
                      <ul className={styles.sectionList}>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Experienced in office moves of all sizes</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Small warehouse relocations and logistics</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Hard access consultation</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Call to organise a free quote</li>
                      </ul>
                      <div className={styles.buttonContainer}>
                          <div className={styles.imageButton}><a href="/pricing#contact"><strong>Let&apos;s talk office moves</strong></a></div>
                      </div>
                  </Col>
                  <Col xs={12} md={6} className="px-0"><Image className={styles.storeImage} height={200} width={400} src="/office.jpg"></Image></Col>
                </Row>

                <Row xs={{ gutter: 0 }} noGutters={true} className="d-flex flex-row-reverse flex-1 grow">
                  <Col xs={12} md={6} className=" d-flex flex-col justify-center bg-yellow-100 p-12">
                      <div className={styles.sectionTitle}>Packing and unpacking</div>
                      <ul className={styles.sectionList}>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Either full house or last minute bits</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>Standard rates</li>
                        <li className="flex gap-3 align-center items-center"><Image height={40} width={40} src="/tick.png"></Image>All returnable materials and boxes supplied Free</li>
                      </ul>
                      <div className={styles.buttonContainer}>
                          <div className={styles.imageButton}><a href="/pricing#contact"><strong>Let&apos;s talk packing</strong></a></div>
                      </div>
                  </Col>
                  <Col xs={12} md={6}  className="px-0 ">
                    <Image className={styles.storeImage} height={200} width={400} src="/packing.jpg"></Image>
                  </Col>
                </Row>

            </Container>
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
  hero: "font-serif bold hidden sm:block absolute text-2xl top-56 pl-9 md:text-4xl lg:text-5xl pl-5 md:left-6 lg:pl-6 lg:left-16 lg:top-72 ",
  heroTab: " border-2 right-0 h-72 w-2/5 bg-blue-400 rounded-2xl",

  bio: "",
  experience: "font-serif flex items-center py-18 mb-6 md:pt-24 xs:mt-26  pt-36 pb-12 md:text-left text-left text-4xl lg:text-5xl mx-5 lg:text-4xl word-wrap",

  // storageContainer: " flex flex-col w-[100vw] h-full lg:flex-row bg-yellow-100",
  //   section: "flex flex-1 flex-col mt-12 text-left",
      sectionTitle: " font-serif text-center text-3xl sm:text-4xl lg:text-4xl mb-12",
      sectionList: "font-gauda text-m lg:text-xl text-left gap-4 justify-center align-center",

    storeImage: "flex h-96 w-full object-cover   ",
    buttonContainer: "flex justify-center items-center w-full mt-12",
    imageButton: "font-gudea bottom-20 left-56 w-fit p-2 rounded-2xl bg-blue-400 text-white ",


  // interstateContainer: "flex w-[100vw] h-full flex-col lg:flex-row-reverse bg-blue-100",
}

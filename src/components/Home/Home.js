import IndexNavbar from 'components/Navbars/IndexNavbar'
import PageHeader from 'components/PageHeader/PageHeader'
import SlideLayout from 'components/SlideLayout/SlideLayout'
import ParticlesBackground from 'components/particles/ParticlesBackground'
import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'reactstrap'
import './Home.css'
import {CiMenuFries} from 'react-icons/ci'
import Aos from 'aos'
import { motion } from "framer-motion";

const Home = () => {
const [isOpen, setIsOpen] = useState(false);
const [homeCheck, setHomeCheck] = useState(false);

  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };
    const handleState=(val)=>{
    setIsOpen(false)
  }
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };
  const slideVariantsOne = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };
  return (
    <>
    
    <IndexNavbar />
   
       
        
        {
          homeCheck===false&&
          <div className="home-div" style={{marginTop:"15%"}}>
        <Row>
     <Col xl={2}>
       <CiMenuFries onClick={toggleLayout} className='ml-lg-5 slide-open-btn '/>
      
    </Col>
    <Col xl={8}>
         <h1 className='mb-2 home-main-heading '>adaptive</h1>
         <h2 className='mb-2  home-sub-heading text-white'>to your business,your growth & future</h2>
         <p className='home-text text-white'>Proudly serving the worlds top asset finance & leasing companies with smart software <br/>
          technology for over four decades.</p>
         
         
         
    </Col>
       </Row>
       <Row className='justify-content-center ' style={{marginTop:"12%"}}>
        <a className='explore-btn' alt="" onClick={()=>setHomeCheck(true)}>
           Explore
          </a>
          </Row>
          </div>
        }
        {
          homeCheck===true&&
          <div className='home-div' style={{backgroundColor:"white",height:"100vh"}}>
        <Row style={{marginTop:"10%"}}>
     <Col xl={1}>
       <CiMenuFries onClick={toggleLayout} className='ml-lg-5 slide-open-btn-second '/>
      
    </Col>
    <Col xl={7}>
    <motion.div initial="hidden" animate="visible" variants={slideVariantsOne}>
         <h1 className='mb-2 home-second-heading '>
         Welcome to the 
         <span style={{color:"#1c72b8"}}> HYBSOL </span>
         Tech
         <br/>
         SmartNav Wizard   
         </h1> 
         <h3 className='mb-2 home-second-sub-heading '>
         Lets quickly get to the information you require.
         </h3>   

         <hr className='home-hr'/>  
         <Row className='no-gutters'>
         <Col xl={2}>
         <Button className='home-btn'>ABOUT US</Button>
         </Col>
         <Col  xl={2} className=''>
         <Button className='home-btn mr-lg-5'>PRODUCTS</Button>
         </Col >
         <Col  xl={2}>
         <Button className='home-btn'>INNOVATION</Button>
         </Col>
         <Col  xl={2}>
         <Button className='home-btn'>INVESTOR PLANS</Button>
         </Col>
         <Col  xl={2} className='text-center'>
         <Button className='home-btn'>EVENTS</Button>
         </Col>
         <Col  xl={2} md={4} className='text-center'>
         <Row>
         <Button className='home-second-btn'>MENU</Button>
         <Button className='home-second-btn'>CONTACT </Button>
         </Row>
         </Col>
         
         
         </Row>
         </motion.div>
         
         
    </Col>
   
    <Col xl={4} className='justify-content-center'>
     <motion.div initial="hidden" animate="visible" variants={slideVariants}>
    <Card className='home-card' style={{zoom:"0.75"}} >
<Row className=''>
<Col>
    <h5 className='home-card-heading mb-1 '>Press Releases</h5>
</Col>
<Col className=' '>
    <img src="https://netsoltech.com/images/Press-Releases.svg" alt="" className='home-card-icons '/>
</Col>
</Row>
    <h5 className='home-card-sub-heading'>from hybsoltech</h5>
    <p className='home-card-text'>
          HYBSOL is excited to be attending the Non-Prime Auto Financing Conference today! Looking forward to gaining valuable insights and networking with industry leaders. Lets explore new opportunities and stay ahead of the curve in the auto financing sector. 
    </p>
    <Button className='home-card-btn'>Explore</Button>
    <hr style={{width:"auto"}}/>
    <Row className=''>
<Col>
    <h5 className='home-card-heading mb-1 '>From Twitter</h5>
</Col>
<Col className=' '>
    <img src="https://netsoltech.com/images/FromTwitter.svg" alt="" className='home-card-icons '/>
</Col>
</Row>
    <h5 className='home-card-sub-heading'>from hybsoltech</h5>
    <p className='home-card-text'>
          HYBSOL is excited to be attending the Non-Prime Auto Financing Conference today! Looking forward to gaining valuable insights and networking with industry leaders. Lets explore new opportunities and stay ahead of the curve in the auto financing sector. 
    </p>
    <Button className='home-card-btn'>Explore</Button>
    <hr style={{width:"auto"}}/>
   <Row className=''>
<Col>
    <h5 className='home-card-heading mb-1 '>Events</h5>
</Col>
<Col className=' '>
    <img src="	https://netsoltech.com/images/Events.svg" alt="" className='home-card-icons '/>
</Col>
</Row>
    <h5 className='home-card-sub-heading'>from hybsoltech</h5>
    <p className='home-card-text'>
          HYBSOL is excited to be attending the Non-Prime Auto Financing Conference today! Looking forward to gaining valuable insights and networking with industry leaders. Lets explore new opportunities and stay ahead of the curve in the auto financing sector. 
    </p>
    <Button className='home-card-btn'>Explore</Button>
  
    

    
    
    
    </Card>
    </motion.div>
    
    </Col>
    
       </Row>
      
          </div>
        }
        <SlideLayout value={isOpen} stateValue={handleState}/>
        
       
      
    </>
  )
}

export default Home
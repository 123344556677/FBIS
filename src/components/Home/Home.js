import IndexNavbar from 'components/Navbars/IndexNavbar'
import PageHeader from 'components/PageHeader/PageHeader'
import SlideLayout from 'components/SlideLayout/SlideLayout'
import ParticlesBackground from 'components/particles/ParticlesBackground'
import React, { useState } from 'react'
import { Button, Col, Row } from 'reactstrap'
import './Home.css'
import {CiMenuFries} from 'react-icons/ci'

const Home = () => {
const [isOpen, setIsOpen] = useState(false);

  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };
    const handleState=(val)=>{
    setIsOpen(false)
  }
  return (
    <>
    
    <IndexNavbar />
   
       
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
       <Row className='justify-content-center ' style={{marginTop:"15%"}}>
        <a className='explore-btn' alt="">
           explore
          </a>
          </Row>
        <SlideLayout value={isOpen} stateValue={handleState}/>
       </div>
      
    </>
  )
}

export default Home
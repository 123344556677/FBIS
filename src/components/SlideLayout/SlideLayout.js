import React, { useEffect, useState } from 'react'
import './SlideLayout.css'
import { Container } from 'reactstrap'
import {AiOutlineClose} from 'react-icons/ai'
import Aos from 'aos'
import { motion } from "framer-motion";

const SlideLayout = ({value,stateValue}) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(()=>{
   setIsOpen(value)
  
    },[value])
     
  const toggleLayout = () => {
    setIsOpen(false)
    stateValue(false)
    
  };
  const slideVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 0.6 } },
  };
  const slideVariantsTwo = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 0.8 } },
  };
  const slideVariantsThree = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 1 } },
  };
  const slideVariantsFour = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 1 } },
  };
  const slideVariantsFive = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 1.1 } },
  };
  return (
 <Container fluid className={`slide-layout ${isOpen ? 'open' : ''}`}>
      <AiOutlineClose className='slide-btn' onClick={toggleLayout}/>
      <motion.div initial="hidden" animate="visible" variants={slideVariants}>
      <div className="content" >
      
        <div className="item" >
          <span className="number mb-3">01</span>
          <span className="text ">Home</span>
        </div>
        
        <div className="item">
          <span className="number ml-lg-4 mb-3">02</span>
          <span className="text ml-lg-4">About Us</span>
        </div>
        <div className="item">
          <span className="number ml-lg-4 mb-3">03</span>
          <span className="text ml-lg-4">Products</span>
        </div>
        <div className="item">
          <span className="number ml-lg-4 mb-3">04</span>
          <span className="text ml-lg-4">Investors</span>
        </div>
        <div className="item">
          <span className="number ml-lg-4 mb-3">05</span>
          <span className="text ml-lg-4">Innovation</span>
        </div>
        <div className="item">
          <span className="number ml-lg-4 mb-3">06</span>
          <span className="text ml-lg-4">Events</span>
        </div>
      </div>
       </motion.div>
    </Container>
   
  )
}

export default SlideLayout
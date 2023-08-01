import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import SlideLayout from "components/SlideLayout/SlideLayout";
import ParticlesBackground from "components/particles/ParticlesBackground";
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row   } from "reactstrap";
import Accordion from 'react-bootstrap/Accordion';
import "./Testimonials.css";
import { CiMenuFries } from "react-icons/ci";
import Aos from "aos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CanvasAnimation from "components/particles/CanvasAnimation";

import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";
import serviceOne from '../../assets/img/dummyOne.jpg'

const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeCheck, setHomeCheck] = useState(false);
  

  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };
  const handleState = (val) => {
    setIsOpen(false);
  };
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };
  const slideVariantsOne = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };
  const history=useNavigate()
 const serviceCards = [
    {
      client:"MICHAEL DENNIGTON",
      designation:"CEO at GOLFWOD - AFFILIATES - CADDY - YO4",
      content:
        "“Working with Drudots Technologies and the Drudots team has been excellent since the very beginning. I started with a rough XD design of an app I wanted to create and we have now not only designed, developed and delivered that app in both app stores, it far exceeded expectations in quality and user experience. So much so, we are currently developing 3 more apps to continue our working relationship. Nothing is too much to ask, the Team is always on hand to help and we hugely value not only our working relationship with Drudots, but also our friendship. Our synergistic development should encourage any company to work with Drudots, we highly recommend you do.”",
    },
    {
     client:"HELDER ARAUJO",
      designation:"CEO at FLASHSTAR - A Fitter World", 
      content:
        "“I have been working with Drudots Technologies for almost 2 years in the development of Flahstar. I'm very glad to have found Drudots Technologies and team, they are very professional and responsible. You just need to have one idea and they will design, develop and test the app until you will be happy with the results. I would choose to work with them always.”",
    },
    {
      client:"EMAD AHMED",
      designation:"CEO at HAYAT", 
      content:
        "“One of the biggest problems we face today is timing and trust in a long-distance relationship with Company whilst keeping the level of Professionalism high to a standard which I found astonishing and successful throughout my experience with Drudots Technologies, I witnessed my Idea come to reality from UX designs to Development in an agile environment which basically meant that I was able to make changes and add on more features to the Android Development of Hayat, Drudots Company provided not only the work but also consultation throughout the last year. I have also learned a lot of things such as how the system works, in terms of Servers and Customers Data, Drudots have helped me to write up the terms and conditions for the application, accessibility features, policy, licensing, and much more. Thank you so much.”",
    },
   
  ];
    
  return (
    <>
      {
      // <IndexNavbar />
    }

      {homeCheck === false && (
        <div className="home-div" style={{ marginTop: "15%" }}>
         <CanvasAnimation />
          <Row>
            <Col xl={2}>
              <CiMenuFries
                onClick={toggleLayout}
                className="ml-lg-5 slide-open-btn "
              />
            </Col>
            <Col xl={8}>
              <h1 className="mb-2 home-main-heading ">Testimonials</h1>
              
              <p className="home-text text-white">
               Do not just take our word for it. See what our satisfied customers have to say. Real stories, real results. Hear from our delighted
                clients in their own words. Discover how our customers lives were transformed through our exceptional service.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center " style={{ marginTop: "12%" }}>
            <a
              className="explore-btn"
              alt=""
              onClick={() => setHomeCheck(true)}
            >
              Explore
            </a>
          </Row>
        </div>
      )}
      {homeCheck === true && (
        <div className="home-div main-div">
          
           
              <CiMenuFries
                onClick={toggleLayout}
                className="ml-lg-5 slide-open-btn-second "
              />
            
            


<Row className="justify-content-center mt-5" style={{ marginTop: "10%" }}>>
<Col xl={12}>
<h1 className="web-heading text-center">Client Testimonials</h1>
<Container>
<Row className="mt-5">
 {serviceCards.map((data, index) => (
<Col xl={12}>
<motion.div
                initial="hidden"
                animate="visible"
                variants={slideVariantsOne}
              >
              <Row className="no-gutters mb-5">
              <Col xl={4} style={{maxWidth:'31%'}}>
              <img className="client-img" src={serviceOne} alt="#" style={{height:"350px"}}/>
              </Col>
              <Col xl={8}>
              
                    <Card className="edge-cards" style={{height:"350px"}}>
                     
                      <CardBody className="p-0">
                     
                        
                   
                      
                        <p className="text-color services-card-text" style={{fontWeight:"500"}}>
                          {data?.content}
                        </p>
                  
                      </CardBody>
                      <CardFooter>
                       <p className="client-name">{data?.client}</p>
                       <span className="team-designation">{data?.designation}</span>
                      </CardFooter>
                     
                    </Card>
                    </Col>
                    </Row>
                    </motion.div>
                  </Col>
 ))}


</Row>
</Container>
</Col>
</Row>

<Footer />
        </div>
      )}
      <SlideLayout value={isOpen} stateValue={handleState} />
    </>
  );
};

export default Testimonials;

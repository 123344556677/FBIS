import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import SlideLayout from "components/SlideLayout/SlideLayout";
import ParticlesBackground from "components/particles/ParticlesBackground";
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row   } from "reactstrap";
import Accordion from 'react-bootstrap/Accordion';
import "./Services.css";
import { CiMenuFries } from "react-icons/ci";
import Aos from "aos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CanvasAnimation from "components/particles/CanvasAnimation";

import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";

const Services = () => {
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
      class:"services-cards-color-one",
      pic:"https://drudotstech.com/img/service/service1.svg",
      heading: "IOS App Development",
      content:
        "Mobile application development services enable you to realise your mobile app ideas into feature-rich user experiences.",
    },
    {
      class:"services-cards-color-Two",
      pic:"https://drudotstech.com/img/service/service2.svg",
      heading: "Andriod App Development",
      content:
        "We channel your ideas into custom android apps that are feature-rich with user-centric.",
    },
    {
      class:"services-cards-color-Three",
      pic:"	https://drudotstech.com/img/service/service3.svg",
      heading: "Web Developement",
      content:
        "We build web applications that deliver remarkable functionality and user interface",
    },
    {
      class:"services-cards-color-Four",
      pic:"https://drudotstech.com/img/service/service5.svg",
      heading: "Mobile App Uploading",
      content:
        "Fast, Powerful & Most Secure Network Solutions for Smart startups & Businesses.",
    },
    {
      class:"services-cards-color-Five",
      pic:"https://drudotstech.com/img/service4.svg",
      heading: "Application Bug Fixes",
      content:
        "From priority bug-fixing, technical investigations and change requests, we’ll support and maintain your software.",
    },
     {
      class:"services-cards-color-Six",
      pic:"	https://drudotstech.com/img/service/service6.svg",
      heading: "UI/UX",
      content:
        "If you need a quick, efficient and secure data migration service with no disruption to your business, our experts can help.",
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
              <h1 className="mb-2 home-main-heading ">Services</h1>
              
              <p className="home-text text-white">
               The company is working with an aim to create the most trusted name in IOS development, both locally and internationally and we are not far away from  that landmark as
                Hybsoltech  is recognized internationally by a list of companies.
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
<h1 className="web-heading text-center"> SERVICES</h1>
<p className="text-center web-sub-heading">The company is working with an aim to create the most trusted name in IOS development, both locally and <br/> internationally and we are not far away from that landmark as Drudots Technology is recognized internationally 
<br/> by a list of companies.</p>

<Container>
<Row className="mt-5">
 {serviceCards.map((data, index) => (
<Col xl={4}>
<motion.div
                initial="hidden"
                animate="visible"
                variants={slideVariantsOne}
              >
                    <Card className="edge-cards">
                      <CardHeader>
                        
                          <img src={data?.pic}alt="" className={data?.pic==="https://drudotstech.com/img/service4.svg"?"service-card-img-app":"service-card-img"}/>
                        
                        <h5 className=" text-color services-card-heading mt-1">{data?.heading}</h5>
                      </CardHeader>
                      <CardBody>
                        <p className="text-color services-card-text">
                          {data?.content}
                        </p>
                      </CardBody>
                      <CardFooter>
                      <Button className="mt-3">Load More -></Button>
                        
                      </CardFooter>
                    </Card>
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

export default Services;

import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import "./Events.css";
import SlideLayout from "components/SlideLayout/SlideLayout";
import { CiMenuFries } from "react-icons/ci";
import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeCheck, setHomeCheck] = useState(false);
  const [moreCheck, setMoreCheck] = useState(true);
  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };
  const handleState = (val) => {
    setIsOpen(false);
  };
  

  const edgeCards = [
    {
      heading: "Proven Track Record",
      content:
        "HYBSOL Technologies taps into its strong business acumen to find solutions to the unique set of challenges and constraints imposed by each new project and delivers solutions that fill performance gaps. We have a proven track record of successfully meeting deadlines and executing the most complex projects within budget while consistently maintaining the highest quality.",
    },
    {
      heading: "Domain Expertise",
      content:
        "With our rich history of innovation, HYBSOL Technologies is a dynamic leader and has been able to accumulate a wealth of experience in the global asset finance and leasing industry. We have built a large knowledge base which is regularly refined and updated to ensure the most up-to-date best practices and business solutions for the benefit of our clients and partners.",
    },
    {
      heading: "Ensured Service Levels",
      content:
        "With a presence in 8 strategically located cities across the globe, and a team of more than 1300 professionals, we ensure that our clients get dedicated attention from the best minds in the industry. We boast an impressive portfolio of several quality awards which further solidify our dominance and status as the finest global service providers.",
    },
    {
      heading: "Pioneers in the Industry",
      content:
        "HYBSOL Technologies maintains its position as a leader in providing innovative solutions to the global asset finance and leasing industry. We take pride in being the first organization in the industry to introduce digital transformation and launch a complete line of digital solutions. We introduced our digital suite to help companies tap into the advantages of digitization.",
    },
  ];
  const teamCards = [
    {
      heading: "AFC Summer Awards Dinner",
      location:"London, Uk",
      date:"12th July 2023",
    },
    {
      heading: "AFPA Trust: Asset Finance & Leasing Summer Gala Di...",
      location:"London, Uk",
      date:"12th July 2023",
    },
    {
      heading: "AFC Summer Conference",
      location:"Texas, USA",
      date:"12th July 2023",
    },
    {
      heading: "Non-Prime Auto Financing Conference",
      location:"NEW York, USA",
      date:"12th July 2023",
    },
    {
      heading: "Leasing Foundation Summer Party",
      location:"Bermingham, Uk",
      date:"12th July 2023",
    },
    {
      heading: "FLA Spring Drinks Reception",
      location:"London, Uk",
      date:"12th July 2023",
    },
  ];

  const history=useNavigate()
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };
  return (
    <>
    {
      // <IndexNavbar />
    }

      <div className="main-div home-div ">
        <br />

        <Row className="logo-row  ">
          <Col xl={2} className="text-right no gutters">
            <img
              className="about-logo"
              alt=""
              src="https://netsoltech.com/images/netsol-logo.svg"
            />
          </Col>
          <Col xl={10} className="mt-3">
            <p className="breadcrums-text text-color">
              Your are now viewing
              <a className="breadcrums-link ml-2" onClick={()=>history('/home')}>HOME</a>
              <span>/</span>
              <a className="breadcrums-link" onClick={()=>history('/events')}>Events</a>
            </p>
          </Col>
        </Row>
        <CiMenuFries
          onClick={toggleLayout}
          className="ml-lg-5 slide-open-btn-second "
        />
        <Container className="" style={{ marginTop: "10%" }}>
          <h1 className="text-color  page-headings">Events</h1>
          <p className="text-color page-text">
            To maintain our dominance in the industry, every year we attend and sponsor
            <br/>
            international finance and leasing summits, conferences, conventions and events 
            <br/> 
            worldwide.
          </p>
          
        </Container>

        
       
       
       
        <Container className="mt-5">
          
          <Row className="mt-5" >
            {teamCards.map((data, index) =>
              
                  <Col xl={4}>
                    <Card className="edge-cards">
                     
                        <img src="https://netsoltech.com/NetsolTechCMS/uploads/Events/London.jpg" className="ml-0 mr-0"  style={{width:"auto"}}/>
                     
                      <CardBody>
                        <h3 className="events-heading text-color">{data?.heading}</h3>
                         <h4 className="events-location-heading mb-0">Location</h4>
                         <p className="text-color">{data?.location}</p>
                         <h4 className="events-location-heading mb-0 mt-3">DATE</h4>
                         <p className="text-color">{data?.date}</p>
                      </CardBody>
                      
                    </Card>
                  </Col>
             
            )}
          </Row>
         
        </Container>
        <Footer />
      </div>
      <SlideLayout value={isOpen} stateValue={handleState} />
    </>
  );
};

export default Events;

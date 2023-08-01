import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import SlideLayout from "components/SlideLayout/SlideLayout";
import ParticlesBackground from "components/particles/ParticlesBackground";
import React, { useState } from "react";
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
import Accordion from "react-bootstrap/Accordion";
import "./Portfolio.css";
import { CiMenuFries } from "react-icons/ci";
import Aos from "aos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CanvasAnimation from "components/particles/CanvasAnimation";
import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";
import serviceOne from "../../assets/img/dummyOne.jpg";

const Projects = () => {
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
  const history = useNavigate();
  const serviceCards = [
    {
     pic:"	https://drudotstech.com/img/portfolio/p1.jpg"
    },
    {
     pic:"	https://drudotstech.com/img/portfolio/p1.jpg"
    },
    {
     pic:"	https://drudotstech.com/img/portfolio/p1.jpg"
    },
    {
     pic:"	https://drudotstech.com/img/portfolio/p1.jpg"
    },
    {
     pic:"	https://drudotstech.com/img/portfolio/p1.jpg"
    },
    {
     pic:"	https://drudotstech.com/img/portfolio/p1.jpg"
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
              <h1 className="mb-2 home-main-heading ">Projects</h1>

              <p className="home-text text-white">
                Our great projects embody innovation, pushing the boundaries of
                whats possible. Each project is a testament to our dedication,
                excellence, and unwavering commitment. From concept to
                completion, our great projects redefine industry standards. With
                meticulous planning and precision execution, our projects stand
                as beacons of success.
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

          <Row
            className="justify-content-center mt-5"
            style={{ marginTop: "10%" }}
          >
            
            <Col xl={12}>
              <h1 className="web-heading text-center">Our Projects</h1>
              <p className="text-center web-sub-heading">The company is working with an aim to create the most trusted name in IOS development, both locally and <br/> internationally and we are not far away from that landmark as Drudots Technology is recognized internationally 
<br/> by a list of companies.</p>
              <Container>
                <Row className="mt-5 justify-content-center">
                  {serviceCards.map((data, index) => (
                    <Col xl={4} className="">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <img src={data?.pic} alt="#" className="mt-5"/>
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

export default Projects;

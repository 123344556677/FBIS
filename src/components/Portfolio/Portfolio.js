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
import projectOne from "../../assets/img/pr.png";
import projectTwo from "../../assets/img/pr2.png";
import projectThree from "../../assets/img/pr3.png";
import projectFour from "../../assets/img/pr4.png";
import projectFive from "../../assets/img/pr5.png";
import projectSix from "../../assets/img/pr6.png";
import projectSeven from "../../assets/img/pr7.png";
import projectEight from "../../assets/img/pri.png";
import projectNine from "../../assets/img/pri2.png";
import projectTen from "../../assets/img/pri3.png";
import projectEleven from "../../assets/img/pri4.png";
import projectTwelve from "../../assets/img/pri5.png";
import projectThirteen from "../../assets/img/pro.png";
import projectFourten from "../../assets/img/pro2.png";
import projectFifteen from "../../assets/img/pro3.png";
import projectSixteen from "../../assets/img/pro4.png";
import projectSeventeen from "../../assets/img/pro5.png";
import projectEighteen from "../../assets/img/pro6.png";




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
     pic:projectOne
    },
    {
     pic:projectTwo
    },
    {
     pic:projectThree
    },
    {
     pic:projectFour
    },
    {
     pic:projectFive
    },
    {
     pic:projectSix
    },
    
    

    
  ];
  const iosProjects = [
    {
     pic:projectSeven
    },
    {
     pic:projectEight
    },
    {
     pic:projectNine
    },
    {
     pic:projectTen
    },
    {
     pic:projectEleven
    },
    {
     pic:projectTwelve
    },
    
    

    
  ];
  const andriodProjects = [
    {
     pic:projectThirteen
    },
    {
     pic:projectFourten
    },
    {
     pic:projectFifteen
    },
    {
     pic:projectSixteen
    },
    {
     pic:projectSeventeen
    },
    {
     pic:projectEighteen
    },
    
    

    
  ];
  const handleScroll = (event) => {
    
    setHomeCheck(true)
  };

  return (
    <>
      <IndexNavbar scrollCheck={homeCheck} />

      {homeCheck === false && (
        <div className="home-div" onWheel={handleScroll} style={{ marginTop: "15%" }}>
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
                completion, our great projects redefine industry standards.
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
              <p className="text-center web-sub-heading">The company is working with an aim to create the most trusted name in IOS and Andriod development, both locally and <br/> internationally and we are not far away from that landmark as Hybsol Technology is recognized internationally 
<br/> by a list of companies.</p>
              <Container>
                <Row className=" justify-content-center">
                  {serviceCards.map((data, index) => (
                    <Col xl={4} className="">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <img src={data?.pic} alt="#" className=" projects-img"/>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
          <hr style={{width:"auto"}}/>
           <Row
            className="justify-content-center mt-5"
            style={{ marginTop: "10%" }}
          >
            
            <Col xl={12}>
              <h1 className="web-heading text-center">IOS Applications</h1>
              <p className="text-center web-sub-heading">The company is working with an aim to create the most trusted name in IOS development, both locally and <br/> internationally and we are not far away from that landmark as Hybsol Technology is recognized internationally 
<br/> by a list of companies.</p>
              <Container>
                <Row className=" justify-content-center">
                  {iosProjects.map((data, index) => (
                    <Col xl={4} className="">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <img src={data?.pic} alt="#" className="projects-img"/>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
           <hr style={{width:"auto"}}/>
           <Row
            className="justify-content-center mt-5"
            style={{ marginTop: "10%" }}
          >
            
            <Col xl={12}>
              <h1 className="web-heading text-center">Andriod Applications</h1>
              <p className="text-center web-sub-heading">The company is working with an aim to create the most trusted name in andriod development, both locally and <br/> internationally and we are not far away from that landmark as Hybsol Technology is recognized internationally 
<br/> by a list of companies.</p>
              <Container>
                <Row className=" justify-content-center">
                  {andriodProjects.map((data, index) => (
                    <Col xl={4} className="">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <img src={data?.pic} alt="#" className=" projects-img"/>
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

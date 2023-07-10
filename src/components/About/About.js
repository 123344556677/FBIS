import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import 'aos/dist/aos.css';
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
import "./About.css";
import SlideLayout from "components/SlideLayout/SlideLayout";
import { CiMenuFries } from "react-icons/ci";
import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
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
      heading: "Najeeb Ghauri",
      content:
        "Founder, Chairman & Chief Executive Officer, NETSOL Technologies, Inc.",
    },
    {
      heading: "Naeem Ghauri",
      content:
        "Founder, President, Chief Executive Officer Innovation and OTOZ, NETSOL Technologies, Inc.",
    },
    {
      heading: "Salim Ghauri",
      content:
        "Founder & Chief Executive Officer, NETSOL Technologies Ltd. Pakistan",
    },
    {
      heading: "Najeeb Ghauri",
      content:
        "Founder, Chairman & Chief Executive Officer, NETSOL Technologies, Inc.",
    },
    {
      heading: "Naeem Ghauri",
      content:
        "Founder, President, Chief Executive Officer Innovation and OTOZ, NETSOL Technologies, Inc.",
    },
    {
      heading: "Salim Ghauri",
      content:
        "Founder & Chief Executive Officer, NETSOL Technologies Ltd. Pakistan",
    },
  ];
  const history=useNavigate()
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };
  Aos.init()
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
              <a className="breadcrums-link" onClick={()=>history('/about')}>About Us</a>
            </p>
          </Col>
        </Row>
        <CiMenuFries
          onClick={toggleLayout}
          className="ml-lg-5 slide-open-btn-second "
        />
        <Container className="" style={{ marginTop: "10%",position:"relative" }}>
          <h1 className="text-color  page-headings">About Us</h1>
          <p className="text-color page-text">
            Proudly serving the world’s top asset finance and leasing companies
            with smart software
            <br />
            technology for over four decades.
          </p>
          <Row className="mt-3">
            <Col xl={2} className="">
              <Button className="home-btn">DOWNLOAD PROFILE</Button>
            </Col>
            <Col xl={2}>
              <Button className="home-second-btn">GET IN TOUCH </Button>
            </Col>
          </Row>
          <Row>
            <div className="about-card"></div>
          </Row>
        </Container>

        <Row className="justify-content-center mt-5">
          <Col xl={10}>
            <Card className="about-big-card">
              <div className="about-big-card-layer ml-1">
                <h1
                  className="text-center text-white mb-0 about-big-card-heading"
                  style={{ marginTop: "20%" }}
                >
                  We are an
                  <span className="home-main-heading"> Adaptive </span>{" "}
                </h1>
                <h1 className="text-center text-white about-big-card-heading">
                  Enterprise
                </h1>
                <p className=" text-white text-center">
                  From when we started to where we are now, HYBSOL has <br />{" "}
                  been progressing as an enterprise that leads change.{" "}
                </p>
              </div>
            </Card>
          </Col>
        </Row>
       
        <Container className=" ml-0 mr-0 about-mission-container mt-5">
          <br />
          <Row className="mt-5 mr-0">
            <Col xl={7}>
              <h2 className="home-sub-heading text-white mt-4">
                Over Four Decades of Global Experience
              </h2>
              <p className=" text-white ">
                With over forty years of experience in providing
                state-of-the-art solutions, cost-effective capabilities and
                consulting services to the global finance and leasing industry,
                we cater to companies with ever growing and diverse business
                requirements across the world
              </p>
            </Col>
            <Col xl={5} className="justify-content-center" >
              <Row>
                <Col xl={2}>
                  <div className="about-circles">
                    <h2 className="home-sub-heading mb-0 text-white text-center">
                      40+
                    </h2>
                    <p className="text-center" style={{ color: "#609ccd" }}>
                      Years in the <br /> Americas
                    </p>
                  </div>
                </Col>
                <Col xl={2} style={{ marginLeft: "10%" }}>
                  <div className="about-circles ml-lg-4">
                    <h2 className="home-sub-heading mb-0 text-white text-center">
                      20+
                    </h2>
                    <p className="text-center" style={{ color: "#609ccd" }}>
                      Years in the <br /> Europe
                    </p>
                  </div>
                </Col>
                <Col xl={1} className="" style={{ marginLeft: "18%" }}>
                  <div className="about-circles">
                    <h2 className="home-sub-heading mb-0 text-white text-center">
                      25+
                    </h2>
                    <p className="text-center" style={{ color: "#609ccd" }}>
                      Years in the <br /> Pacific
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
       
        <Container className="mt-5">
          <h1 className="text-center text-color mt-5 edge-text">Our Edge</h1>

          <Row className="mt-5">
            {edgeCards.map((data, index) => (
              <Col xl={6}>
                <Card className="edge-cards">
                  <CardHeader>
                    <h2 className="edge-card-heading text-color mb-0">
                      {" "}
                      {data?.heading}{" "}
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <p className="edge-card-text"> {data?.content} </p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <h1 className="text-center text-color mt-5 edge-text">
            Management Team
          </h1>

          <Row className="mt-5" >
            {teamCards.map((data, index) =>
              moreCheck ? (
                index < 3 && (
                  <Col xl={4}>
                    <Card className="edge-cards">
                      <CardHeader>
                        <h2 className="edge-card-heading text-color mb-0 text-center">
                          {" "}
                          {data?.heading}{" "}
                        </h2>
                      </CardHeader>
                      <CardBody>
                        <p className="edge-card-text text-center">
                          {" "}
                          {data?.content}{" "}
                        </p>
                      </CardBody>
                      <CardFooter>
                        <ProfileModals />
                      </CardFooter>
                    </Card>
                  </Col>
                )
              ) : (
                <Col xl={4}>
                  <Card className="edge-cards">
                    <CardHeader>
                      <h2 className="edge-card-heading text-color mb-0 text-center">
                        {" "}
                        {data?.heading}{" "}
                      </h2>
                    </CardHeader>
                    <CardBody>
                      <p className="edge-card-text text-center">
                        {" "}
                        {data?.content}{" "}
                      </p>
                    </CardBody>
                    <CardFooter>
                      <ProfileModals />
                    </CardFooter>
                  </Card>
                </Col>
              )
            )}
          </Row>
          {moreCheck && (
            <Row className="justify-content-center">
              <a
                className="explore-about-btn"
                alt=""
                onClick={() => setMoreCheck(false)}
              >
                +
              </a>
            </Row>
          )}
        </Container>
        <Footer />
      </div>
      <SlideLayout value={isOpen} stateValue={handleState} />
    </>
  );
};

export default About;

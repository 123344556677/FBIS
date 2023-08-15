import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import SlideLayout from "components/SlideLayout/SlideLayout";
import ParticlesBackground from "components/particles/ParticlesBackground";
import React, { useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Row   } from "reactstrap";
import Accordion from 'react-bootstrap/Accordion';
import "./Home.css";
import { CiMenuFries } from "react-icons/ci";
import Aos from "aos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CanvasAnimation from "components/particles/CanvasAnimation";
import homeOne from './workflow.png'
import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";
import Carousels from "components/Carousel/Carousel";
import homeTwo from '../../assets/img/h1.jpg'
import homeThree from '../../assets/img/h2.jpg'
import { useEffect } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeCheck, setHomeCheck] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  

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
      pic:"https://drudotstech.com/img/service1.svg",
      heading: "IOS App Development",
      content:
        "Mobile application development services enable you to realise your mobile app ideas into feature-rich user experiences.",
    },
    {
      class:"services-cards-color-Two",
      pic:"https://drudotstech.com/img/service2.svg",
      heading: "Andriod App Development",
      content:
        "We channel your ideas into custom android apps that are feature-rich with user-centric.",
    },
    {
      class:"services-cards-color-Three",
      pic:"https://drudotstech.com/img/service3.svg",
      heading: "Web Developement",
      content:
        "We build web applications that deliver remarkable functionality and user interface, give me two mre lines of it.",
    },
    {
      class:"services-cards-color-Four",
      pic:"https://drudotstech.com/img/service4.svg",
      heading: "Mobile App Uploading",
      content:
        "Fast, Powerful & Most Secure Network Solutions for Smart startups & Businesses.",
    },
    {
      class:"services-cards-color-Five",
      pic:"https://drudotstech.com/img/service5.svg",
      heading: "Application Bug Fixes",
      content:
        "From priority bug-fixing, technical investigations and change requests, we’ll support and maintain your software.",
    },
     {
      class:"services-cards-color-Six",
      pic:"https://drudotstech.com/img/service6.svg",
      heading: "UI/UX",
      content:
        "If you need a quick, efficient and secure data migration service with no disruption to your business, our experts can help.",
    },
  ];

  Aos.init()

const handleScroll = (event) => {
    
    setHomeCheck(true)
  };
    
  return (
    <>
      
      <IndexNavbar scrollCheck={homeCheck} />
    

      {homeCheck === false && (
        <div onWheel={handleScroll} className="home-div" style={{ marginTop: "15%" }}>
         <CanvasAnimation />
          <Row>
            <Col xl={2}>
              <CiMenuFries
                onClick={toggleLayout}
                className="ml-lg-5 slide-open-btn "
              />
            </Col>
            <Col xl={8}>
              <h1 className="mb-2 home-main-heading ">adaptive</h1>
              <h2 className="mb-2  home-sub-heading text-white">
                to your business,your growth & future
              </h2>
              <p className="home-text text-white">
                Proudly serving the worlds top asset finance & leasing companies
                with smart software <br />
                technology for over four decades.
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
          <Row style={{ marginTop: "10%" }}>
            <Col xl={1}>
              <CiMenuFries
                onClick={toggleLayout}
                className="ml-lg-5 slide-open-btn-second "
              />
            </Col>
            <Col xl={11}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideVariantsOne}
              >
              <Container>
              <Row>
              <Col xl={6}>
              <img src={homeTwo} alt=""/>
              </Col>
              <Col xl={5}>
             <p className="web-text">
             Software development organization offering top-notch services to  business of all kinds, startups as well as enterprises, to equip them  with the latest technological 
             requisites in the ever-evolving <br/> business landscape.
             </p>
             <p className="web-text mt-5">
             hybsoltech never compromises on the quality of work and with a team of tested professionals we are always on time and fulfill the requirements of our valuable clients. Apart from that our clients get a benefit of getting every IOS related work done at one place
             </p>
              </Col>
              </Row>
              <Row className="mt-5">
              <Col xl={6} className="mt-5">
              <p className="web-text">
             The most significant thing about Hybsol is
              that our customers will get solutions to all their problems at one place either it is back-end development
               or front end designing we deal in all the stuff  related to IOS.
              
             </p>
             <p className="web-text mt-5">
             In short, Hybsoltech will take care of your projects from scratch to highly professional, flawless and dependable applications/websites. We deal with bulk amount 
             of international and local projects on a regular basis.
             </p>
              
              </Col>
              <Col xl={5} className="mt-5">
              <img src={homeThree} alt=""/>
              </Col>
              </Row>
              </Container>


              {
                // <h1 className="mb-2 home-second-heading ">
                //   Welcome to the
                //   <span style={{ color: "#1c72b8" }}> HYBSOL </span>
                //   Tech
                //   <br />
                //   SmartNav Wizard
                // </h1>
                // <h3 className="mb-2 home-second-sub-heading ">
                //   Lets quickly get to the information you require.
                // </h3>

                // <hr className="home-hr" />
                // <Row className="no-gutters">
                //   <Col xl={2}>
                //     <Button className="home-btn" onClick={()=>history('/about')}>ABOUT US</Button>
                //   </Col>
                //   <Col xl={2} className="">
                //     <Button className="home-btn mr-lg-5">PRODUCTS</Button>
                //   </Col>
                //   <Col xl={2}>
                //     <Button className="home-btn" onClick={()=>history('/innovation')}>INNOVATION</Button>
                //   </Col>
                //   <Col xl={2}>
                //     <Button className="home-btn">INVESTOR PLANS</Button>
                //   </Col>
                //   <Col xl={2} className="text-center">
                //     <Button className="home-btn" onClick={()=>history('/events')}>EVENTS</Button>
                //   </Col>
                //   <Col xl={2} md={4} className="text-center">
                //     <Row>
                //       <Button className="home-second-btn">MENU</Button>
                //       <Button className="home-second-btn">CONTACT </Button>
                //     </Row>
                //   </Col>
                // </Row>
              }
              </motion.div>
           </Col>
           
{
            // <Col xl={4} className="justify-content-center">
            //   <motion.div
            //     initial="hidden"
            //     animate="visible"
            //     variants={slideVariants}
            //   >
            //     <Card className="home-card" style={{ zoom: "0.75" }}>
            //       <Row className="">
            //         <Col>
            //           <h5 className="home-card-heading mb-1 ">
            //             Press Releases
            //           </h5>
            //         </Col>
            //         <Col className=" ">
            //           <img
            //             src="https://netsoltech.com/images/Press-Releases.svg"
            //             alt=""
            //             className="home-card-icons "
            //           />
            //         </Col>
            //       </Row>
            //       <h5 className="home-card-sub-heading">from hybsoltech</h5>
            //       <p className="home-card-text">
            //         HYBSOL is excited to be attending the Non-Prime Auto
            //         Financing Conference today! Looking forward to gaining
            //         valuable insights and networking with industry leaders. Lets
            //         explore new opportunities and stay ahead of the curve in the
            //         auto financing sector.
            //       </p>
            //       <Button className="home-card-btn">Explore</Button>
            //       <hr style={{ width: "auto" }} />
            //       <Row className="">
            //         <Col>
            //           <h5 className="home-card-heading mb-1 ">From Twitter</h5>
            //         </Col>
            //         <Col className=" ">
            //           <img
            //             src="https://netsoltech.com/images/FromTwitter.svg"
            //             alt=""
            //             className="home-card-icons "
            //           />
            //         </Col>
            //       </Row>
            //       <h5 className="home-card-sub-heading">from hybsoltech</h5>
            //       <p className="home-card-text">
            //         HYBSOL is excited to be attending the Non-Prime Auto
            //         Financing Conference today! Looking forward to gaining
            //         valuable insights and networking with industry leaders. Lets
            //         explore new opportunities and stay ahead of the curve in the
            //         auto financing sector.
            //       </p>
            //       <Button className="home-card-btn">Explore</Button>
            //       <hr style={{ width: "auto" }} />
            //       <Row className="">
            //         <Col>
            //           <h5 className="home-card-heading mb-1 ">Events</h5>
            //         </Col>
            //         <Col className=" ">
            //           <img
            //             src="	https://netsoltech.com/images/Events.svg"
            //             alt=""
            //             className="home-card-icons "
            //           />
            //         </Col>
            //       </Row>
            //       <h5 className="home-card-sub-heading">from hybsoltech</h5>
            //       <p className="home-card-text">
            //         HYBSOL is excited to be attending the Non-Prime Auto
            //         Financing Conference today! Looking forward to gaining
            //         valuable insights and networking with industry leaders. Lets
            //         explore new opportunities and stay ahead of the curve in the
            //         auto financing sector.
            //       </p>
            //       <Button className="home-card-btn">Explore</Button>
            //     </Card>
            //   </motion.div>
            // </Col>
}
</Row>
<hr style={{ width: "auto" }} />
<Row className="justify-content-center mt-5" >
<Col xl={11}>
<h1 className="web-heading text-center">OUR WORKFLOW</h1>
<p className="text-center web-sub-heading">We always follow professional Workflow and provide you best service with resealable
<br/> costs.</p>

<Container>
<Row className="mt-5 justify-content-center">

<Col xl={6}>

 <Accordion defaultActiveKey="0"  >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion-header">Requirements Gathering </Accordion.Header>
        <Accordion.Body>
          In this phase, you must define the requirements. You should explain business opportunities and plan the time
           and effort needed to build the project.
        </Accordion.Body>
      </Accordion.Item>

    <hr style={{width:"auto"}}/>
    <Accordion.Item eventKey="1">
        <Accordion.Header className="accordion-header">Design the Requirements </Accordion.Header>
        <Accordion.Body>
          Design process involves multiple stages Understand, Research, Sketch, Design, Prototype, Test,
          Refine. An iterative design process starts from first stage and moves towards last stage.
        </Accordion.Body>
      </Accordion.Item>
      
    <hr style={{width:"auto"}}/>
    <Accordion.Item eventKey="2">
        <Accordion.Header className="accordion-header">Construction Iteration </Accordion.Header>
        <Accordion.Body>
          When the team defines the UI/UX, the work begins. Developers start working on their project, which aims to deploy a working product. The product will undergo various stages of 
          improvement, so it includes simple, minimal functionality.
        </Accordion.Body>
      </Accordion.Item>
      
    <hr style={{width:"auto"}}/>
    <Accordion.Item eventKey="3">
        <Accordion.Header className="accordion-header">Testing/ Quality Assurance</Accordion.Header>
        <Accordion.Body>
         In this phase, the Quality Assurance team examines 
         the products performance and looks for the bug.
        </Accordion.Body>
      </Accordion.Item>
      
    <hr style={{width:"auto"}}/>
    <Accordion.Item eventKey="4">
        <Accordion.Header className="accordion-header">Deployment</Accordion.Header>
        <Accordion.Body>
          In this phase, the team issues a product for the users work environment. After the project team tests the product and the product passes each testing phase, 
          the product is ready to go live
        </Accordion.Body>
      </Accordion.Item>
      
    <hr style={{width:"auto"}}/>
    <Accordion.Item eventKey="5">
        <Accordion.Header className="accordion-header">Feedback </Accordion.Header>
        <Accordion.Body>
        After releasing the product, the last step is feedback. In this, the team receives 
        feedback about the product and works through the feedback.
        </Accordion.Body>
      </Accordion.Item>
      
    <hr style={{width:"auto"}}/>
    <Accordion.Item eventKey="6">
        <Accordion.Header className="accordion-header">Maintenance </Accordion.Header>
        <Accordion.Body>
          This phase involves making changes to hardware, software, and documentation to support its operational effectiveness. It includes making changes to improve
         a systems performance, correct problems, enhance security, or address user requirements.
        </Accordion.Body>
      </Accordion.Item>
      
   
  </Accordion>

  

</Col>

<Col xl={5}>
<img src={homeOne} className="ml-lg-5 mt-5" alt="" />
</Col>

</Row>

</Container>

</Col>
</Row>

<hr style={{ width: "auto" }} />
<Row className="justify-content-center mt-5">
<Col xl={12}>
<h1 className="web-heading text-center">OUR SERVICES</h1>
<p className="text-center web-sub-heading">We provide best quality services.</p>

<Container>

<Row className="mt-5">
 {serviceCards.map((data, index) => (
<Col xl={4}>
                    <Card className={`${data?.class} services-cards`} style={{height:"330px"}}>
                      <CardHeader>
                        <h2 className=" mb-0 text-center">
                          <img src={data?.pic}alt="" className="service-card-img"/>
                        </h2>
                        <h5 className="text-center services-card-heading mt-1">{data?.heading}</h5>
                      </CardHeader>
                      <CardBody>
                        <p className="services-card-text text-center">
                          {data?.content}
                        </p>
                      </CardBody>
                      <CardFooter>
                        
                      </CardFooter>
                    </Card>
                  </Col>
 ))}


</Row>
</Container>
</Col>
</Row>
<hr style={{ width: "auto" }} />
<Row className="justify-content-center mt-5">
<Col xl={12}>
<h1 className="web-heading text-center">OUR PROJECTS</h1>
<p className="text-center web-sub-heading">We provide best tested Projects.</p>

<Container>
<Row className="mt-5">

<Carousels/>


</Row>
</Container>
</Col>
</Row>
{
// <hr style={{ width: "auto" }} />
// <Row className="justify-content-center mt-5">
// <Col xl={12}>
// <h1 className="web-heading text-center">PORTFOLIO</h1>
// <p className="text-center web-sub-heading">THE WORK ON WHICH WE ARE PROUD OF.</p>

// <Container>
// <Row className="mt-5">
//  {serviceCards.map((data, index) => (
// <Col xl={4}>
//                     <Card className={`${data?.class} services-cards`}>
//                       <CardHeader>
//                         <h2 className=" mb-0 text-center">
//                           <img src={data?.pic}alt="" className="service-card-img"/>
//                         </h2>
//                         <h5 className="text-center services-card-heading mt-1">{data?.heading}</h5>
//                       </CardHeader>
//                       <CardBody>
//                         <p className="services-card-text text-center">
//                           {data?.content}
//                         </p>
//                       </CardBody>
//                       <CardFooter>
                        
//                       </CardFooter>
//                     </Card>
//                   </Col>
//  ))}


// </Row>
// </Container>
// </Col>
// </Row>
 }
<Footer />
        </div>
      )}
      <SlideLayout value={isOpen} stateValue={handleState} />
    </>
  );
};

export default Home;

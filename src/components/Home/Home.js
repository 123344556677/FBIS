import IndexNavbar from "components/Navbars/IndexNavbar";
import SlideLayout from "components/SlideLayout/SlideLayout";
import React, { useState } from "react";
import { Col, Container, Row, List, ListInlineItem } from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Home.css";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import homeOne from "../../assets/img/workflow.png";
import Footer from "components/Footer/Footer";
import Carousels from "components/Carousel/Carousel";
import homeTwo from "../../assets/img/h1.jpg";
import homeThree from "../../assets/img/h2.jpg";
import homeFour from "../../assets/img/card1.png";
import homeFive from "../../assets/img/card2.png";
import homeSix from "../../assets/img/card3.png";
import homeSeven from "../../assets/img/card4.png";
import homeEight from "../../assets/img/card5.png";
import homeNine from "../../assets/img/card6.png";
import ViewPage from "components/ViewPage/ViewPage";
import { homeText } from "Mock_data/Data";
import ScrollUp from "../ScrollUp";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeCheck, setHomeCheck] = useState(false);
  const [projectValue, setProjectValue] = useState("web");
  const navigate = useNavigate();

  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };

  const handleState = (val) => {
    setIsOpen(false);
  };

  const homeCards = [
    {
      pic: homeFour,
    },
    {
      pic: homeFive,
    },
    {
      pic: homeSix,
    },
    {
      pic: homeSeven,
    },
    {
      pic: homeEight,
    },
    {
      pic: homeNine,
    },
  ];

  const slideVariantsOne = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };

  const setHomeCheckValue = (val) => {
    setHomeCheck(val);
  };

  return (
    <>
      <IndexNavbar scrollCheck={homeCheck} />

      {homeCheck === false && (
        <ViewPage
          checkValue={setHomeCheckValue}
          text={homeText}
          heading={"HYBSOL."}
        />
      )}
      {homeCheck === true && (
        <div className="home-div main-div">
          <Row style={{ marginTop: "10%" }}>
            <Col xl={1}>
              <CiMenuFries
                onClick={toggleLayout}
                className="ml-lg-5 slide-open-btn-second "
              />
              <ScrollUp/>
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
                      <img src={homeTwo} alt="" />
                    </Col>
                    <Col xl={5}>
                      <p className="web-text">
                        Software development organization offering top-notch
                        services to business of all kinds, startups as well as
                        enterprises, to equip them with the latest technological
                        requisites in the ever-evolving <br /> business
                        landscape.
                      </p>
                      <p className="web-text mt-5">
                        hybsoltech never compromises on the quality of work and
                        with a team of tested professionals we are always on
                        time and fulfill the requirements of our valuable
                        clients. Apart from that our clients get a benefit of
                        getting every IOS related work done at one place
                      </p>
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <Col xl={6} className="mt-5">
                      <p className="web-text">
                        The most significant thing about Hybsol is that our
                        customers will get solutions to all their problems at
                        one place either it is back-end development or front end
                        designing we deal in all the stuff related to IOS.
                      </p>
                      <p className="web-text mt-5">
                        In short, Hybsoltech will take care of your projects
                        from scratch to highly professional, flawless and
                        dependable applications/websites. We deal with bulk
                        amount of international and local projects on a regular
                        basis.
                      </p>
                    </Col>
                    <Col xl={5} className="mt-5">
                      <img src={homeThree} alt="" />
                    </Col>
                  </Row>
                </Container>
              </motion.div>
            </Col>
          </Row>
          <hr style={{ width: "auto" }} />
          <Row className="justify-content-center mt-5">
            <Col xl={11}>
              <h1 className="web-heading text-center">OUR WORKFLOW</h1>
              <p className="text-center web-sub-heading">
                We always follow professional Workflow and provide you best
                service with resealable
                <br /> costs.
              </p>

              <Container>
                <Row className="mt-5 justify-content-center">
                  <Col xl={6}>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="accordion-header">
                          Requirements Gathering{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          In this phase, you must define the requirements. You
                          should explain business opportunities and plan the
                          time and effort needed to build the project.
                        </Accordion.Body>
                      </Accordion.Item>

                      <hr style={{ width: "auto" }} />
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="accordion-header">
                          Design the Requirements{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          Design process involves multiple stages Understand,
                          Research, Sketch, Design, Prototype, Test, Refine. An
                          iterative design process starts from first stage and
                          moves towards last stage.
                        </Accordion.Body>
                      </Accordion.Item>

                      <hr style={{ width: "auto" }} />
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="accordion-header">
                          Construction Iteration{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          When the team defines the UI/UX, the work begins.
                          Developers start working on their project, which aims
                          to deploy a working product. The product will undergo
                          various stages of improvement, so it includes simple,
                          minimal functionality.
                        </Accordion.Body>
                      </Accordion.Item>

                      <hr style={{ width: "auto" }} />
                      <Accordion.Item eventKey="3">
                        <Accordion.Header className="accordion-header">
                          Testing/ Quality Assurance
                        </Accordion.Header>
                        <Accordion.Body>
                          In this phase, the Quality Assurance team examines the
                          products performance and looks for the bug.
                        </Accordion.Body>
                      </Accordion.Item>

                      <hr style={{ width: "auto" }} />
                      <Accordion.Item eventKey="4">
                        <Accordion.Header className="accordion-header">
                          Deployment
                        </Accordion.Header>
                        <Accordion.Body>
                          In this phase, the team issues a product for the users
                          work environment. After the project team tests the
                          product and the product passes each testing phase, the
                          product is ready to go live
                        </Accordion.Body>
                      </Accordion.Item>

                      <hr style={{ width: "auto" }} />
                      <Accordion.Item eventKey="5">
                        <Accordion.Header className="accordion-header">
                          Feedback{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          After releasing the product, the last step is
                          feedback. In this, the team receives feedback about
                          the product and works through the feedback.
                        </Accordion.Body>
                      </Accordion.Item>

                      <hr style={{ width: "auto" }} />
                      <Accordion.Item eventKey="6">
                        <Accordion.Header className="accordion-header">
                          Maintenance{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          This phase involves making changes to hardware,
                          software, and documentation to support its operational
                          effectiveness. It includes making changes to improve a
                          systems performance, correct problems, enhance
                          security, or address user requirements.
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
              <p className="text-center web-sub-heading">
                We provide best quality services.
              </p>

              <Container>
                <Row className="mt-5">
                  {homeCards?.map((data, index) => (
                    <Col xl={4}>
                      <img
                        src={data?.pic}
                        alt="#"
                        className="services-cards mt-4"
                        onClick={() => navigate("/services")}
                      />
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
              <p className="text-center web-sub-heading">
                We provide best tested Projects.
              </p>

              <Container>
                <Row className="mt-3">
                  <List type="inline" className="list">
                    <ListInlineItem
                      className={`list-items ${
                        projectValue === "web" ? "active" : ""
                      }`}
                      onClick={() => setProjectValue("web")}
                    >
                      web design
                    </ListInlineItem>
                    <ListInlineItem
                      className={`list-items ${
                        projectValue === "ui" ? "active" : ""
                      }`}
                      onClick={() => setProjectValue("ui")}
                    >
                      ui/ux
                    </ListInlineItem>
                    <ListInlineItem
                      className={`list-items ${
                        projectValue === "ios" ? "active" : ""
                      }`}
                      onClick={() => setProjectValue("ios")}
                    >
                      ios applications
                    </ListInlineItem>
                    <ListInlineItem
                      className={`list-items ${
                        projectValue === "andriod" ? "active" : ""
                      }`}
                      onClick={() => setProjectValue("andriod")}
                    >
                      Andriod applications
                    </ListInlineItem>
                  </List>

                  <Carousels imageValue={projectValue} />
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

export default Home;

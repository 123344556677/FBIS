import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import {
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
import Footer from "components/Footer/Footer";
import serviceOne from "../../assets/img/dummyOne.jpg";
import ViewPage from "components/ViewPage/ViewPage";
import { aboutText } from "Mock_data/Data";
import { aboutCards } from "Mock_data/Data";
import ScrollUp from "../ScrollUp";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeCheck, setHomeCheck] = useState(false);

  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };
  const handleState = (val) => {
    setIsOpen(false);
  };
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
          text={aboutText}
          heading={"About Us"}
        />
      )}
      {homeCheck === true && (
        <div className="home-div main-div">
          {
            // <CiMenuFries
            //   onClick={toggleLayout}
            //   className="ml-lg-5 slide-open-btn-second "
            // />
          }
          <ScrollUp />

          <Row className="justify-content-center" style={{ marginTop: "" }}>
            <Col xl={12}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideVariantsOne}
              >
                <Row className="justify-content-center">
                  <Col xl={8}>
                    <h1 className="web-heading text-center">
                      {" "}
                      Message From Our Founder
                    </h1>
                    <h4 className="text-center" style={{ color: "black" }}>
                      "As the founder of Integrated Synchronized and Digitized
                      Solutions, I have had the privilege of guiding our company
                      on a journey driven by a profound belief in the
                      transformative potential of technology. From our earliest
                      days, our mission has been clear: to revolutionize how
                      businesses leverage technology for success in the modern
                      world. <br /> <br />
                      At Integrated Synchronized and Digitized Solutions, we're
                      not just another tech company—we're architects of digital
                      transformation. Our comprehensive suite of services,
                      spanning application development, web solutions, database
                      administration, and Oracle upgrades, is designed to
                      seamlessly integrate with our clients needs, empowering
                      them to thrive in an increasingly digital landscape.
                      <br /> <br />
                      Yet, our vision extends beyond mere technical expertise.
                      We're committed to fostering a culture of innovation and
                      collaboration, where ideas flourish and partnerships
                      thrive. Our goal is to not only meet but exceed our
                      clients expectations, delivering solutions that not only
                      solve immediate challenges but also anticipate future
                      needs."
                    </h4>
                  </Col>
                </Row>
              </motion.div>
              <hr className="ml-2 mr-2 line" />

              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideVariantsOne}
              >
                <h1 className="web-heading text-center">
                  {" "}
                  Our vision & Core Values
                </h1>
                <Row className="justify-content-center">
                  <Col xl={8} className="mt-3">
                    <div className="d-flex justify-content-center">
                      <div className="text-center">
                        <img
                          src={require("../../assets/img/vission.jpg")}
                          alt="vision"
                          className="vision-img"
                        />
                      </div>
                      <div className="mt-3 ml-3">
                        <h4 className="" style={{ color: "black" }}>
                          At Integrated Synchronized and Digitized Solutions,
                          our vision is to lead the way in technological
                          integration, empowering businesses to thrive in the
                          digital era. We are committed to redefining
                          possibilities through innovative solutions in app
                          development, web solutions, database administration,
                          and Oracle upgrades. With a focus on integrity,
                          excellence, and customer satisfaction, we aim to be
                          the trusted partner guiding businesses towards success
                          in an ever-evolving technological landscape.
                        </h4>
                      </div>
                    </div>
                  </Col>
                  <Col xl={8} className="mt-4">
                    <div className="d-flex justify-content-center">
                      <div className="mt-5 mr-3">
                        <h4 className="text-center" style={{ color: "black" }}>
                          At Integrated Synchronized and Digitized Solutions,
                          our core values form the bedrock of our company ethos.
                          Integrity guides our every interaction, ensuring
                          transparency and ethical conduct. We pursue excellence
                          in all endeavors, delivering top-tier solutions
                          through innovation and collaboration. Customer
                          satisfaction is paramount, driving us to exceed
                          expectations and forge enduring relationships. These
                          values define our identity and fuel our relentless
                          pursuit of excellence in every aspect of our work.
                        </h4>
                      </div>
                      <div className="">
                        <img
                          src={require("../../assets/img/coreValues.jpg")}
                          alt="vision"
                          className="coreValue-img"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </motion.div>
              <hr className="ml-2 mr-2 line" />

              <h1 className="web-heading text-center"> Meet Our Team</h1>

              <p className="text-center web-sub-heading">
                Meet the dedicated minds behind our success. Our team is a
                diverse blend of talents,
                <br /> each contributing their unique expertise to drive
                innovation.
              </p>

              <Container>
                <Row className="mt-5">
                  {aboutCards.map((data, index) => (
                    <Col xl={4} className="text-center">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <Card className="edge-cards ">
                          <CardHeader>
                            <img src={serviceOne} alt="" className="" />

                            <h5 className="text-color  services-card-heading  mb-0">
                              {data?.heading}
                            </h5>
                            <span className="team-designation">
                              {data?.designation}
                            </span>
                          </CardHeader>
                          <CardBody>
                            <p className="text-color services-card-text">
                              {data?.content}
                            </p>
                          </CardBody>
                          <CardFooter></CardFooter>
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

export default About;

import IndexNavbar from "components/Navbars/IndexNavbar";
import SlideLayout from "components/SlideLayout/SlideLayout";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, Col, Container, Row } from "reactstrap";
import "./Testimonials.css";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import Footer from "components/Footer/Footer";
import TestimonialOne from "../../assets/img/sparklink.png";
import TestimonialTwo from "../../assets/img/techvista.png";
import TestimonialThree from "../../assets/img/pixelEdge.png";
import { testimonialsText } from "Mock_data/Data";
import ViewPage from "components/ViewPage/ViewPage";
import ScrollUp from "../ScrollUp";

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

  const slideVariantsOne = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };

  const serviceCards = [
    {
      pic: TestimonialOne,
      client: "SparkLink Innovations",
      designation: "USA",
      content:
        "“At SparkLink Innovations, we've had the privilege of partnering with Hybsol Technologies on several projects, and the experience has been truly remarkable. Their innovative solutions and unwavering commitment to excellence have had a transformative impact on our business. Hybsol Technologies doesn't just provide technology; they provide tailored solutions that align perfectly with our goals. Their team's deep expertise, professionalism, and dedication have not only solved complex challenges but have also elevated our projects to new heights. Working with Hybsol Technologies has been a game-changing collaboration that continues to shape the future of our technological endeavors.”",
    },
    {
      pic: TestimonialTwo,
      client: "TechVista Solutions",
      designation: "USA",
      content:
        "“Collaborating with Hybsol Technologies has been a transformative experience for TechVista Solutions. Their ability to craft innovative solutions that align seamlessly with our objectives has propelled our projects to new heights. Hybsol's commitment to excellence and deep technical expertise have not only addressed our challenges but have also opened doors to new possibilities. With Hybsol Technologies as a partner, we've harnessed the power of technology to drive our success forward, and their contributions continue to shape our journey in remarkable ways.”",
    },
    {
      pic: TestimonialThree,
      client: "Pixel Edege Technoloies",
      designation: "USA",
      content:
        "“Working closely with Hybsol Technologies on our photo editor app project has been an exceptional journey. Their technical prowess and creative insights have seamlessly blended with our vision, resulting in an app that exceeds our expectations. Hybsol's dedication to detail, user experience, and innovation has enriched every aspect of the app's functionality. Their collaborative approach and timely delivery have made the entire process not only efficient but also enjoyable. Hybsol Technologies has played a pivotal role in bringing our photo editor app to life, and their partnership continues to be invaluable as we strive for excellence in the tech realm.”",
    },
  ];

  const setHomeCheckValue = (val) => {
    setHomeCheck(val);
  };

  return (
    <>
      <IndexNavbar scrollCheck={homeCheck} />

      {homeCheck === false && (
        <ViewPage
          checkValue={setHomeCheckValue}
          text={testimonialsText}
          heading={"Testimonials"}
        />
      )}
      {homeCheck === true && (
        <div className="home-div main-div">
          <CiMenuFries
            onClick={toggleLayout}
            className="ml-lg-5 slide-open-btn-second "
          />
          <ScrollUp/>
          
          <Row
            className="justify-content-center mt-5"
            style={{ marginTop: "10%" }}
          >
            <Col xl={12}>
              <h1 className="web-heading text-center">Client Testimonials</h1>
              <p className="text-center web-sub-heading">
                According to our clients, Hybsol stands out as the best choice
                for innovative solutions that exceed expectations.
              </p>
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
                          <Col xl={4} style={{ maxWidth: "31%" }}>
                            <img
                              className="client-img"
                              src={data?.pic}
                              alt="#"
                              style={{ height: "350px" }}
                            />
                          </Col>
                          <Col xl={8}>
                            <Card
                              className="edge-cards"
                              style={{ height: "350px" }}
                            >
                              <CardBody className="p-0">
                                <p
                                  className="text-color services-card-text"
                                  style={{ fontWeight: "500" }}
                                >
                                  {data?.content}
                                </p>
                              </CardBody>
                              <CardFooter>
                                <p className="client-name">{data?.client}</p>
                                <span className="team-designation">
                                  {data?.designation}
                                </span>
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

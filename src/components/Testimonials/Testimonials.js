import IndexNavbar from "components/Navbars/IndexNavbar";
import SlideLayout from "components/SlideLayout/SlideLayout";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, Col, Container, Row } from "reactstrap";
import "./Testimonials.css";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import Footer from "components/Footer/Footer";
import TestimonialOne from "../../assets/img/amazon-agri-logo.jpg";
import TestimonialTwo from "../../assets/img/enviro-logo.png";
import TestimonialThree from "../../assets/img/vendor-logo.jpg";
import TestimonialFour from "../../assets/img/holstein-logo.PNG";
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
      client: "Amazon Agri",
      designation: "German",
      content:
        "“At Amazon Agri, we've had the privilege of partnering with ISD Solutions on several projects, and the experience has been truly remarkable. Their innovative solutions and unwavering commitment to excellence have had a transformative impact on our business. ISD Solutions doesn't just provide technology; they provide tailored solutions that align perfectly with our goals. Their team's deep expertise, professionalism, and dedication have not only solved complex challenges but have also elevated our projects to new heights.”",
    },
    {
      pic: TestimonialFour,
      client: "Pakistan Holstein Pvt ltd",
      designation: "Pakistan",
      content:
        "“Collaborating closely with ISD Solutions has been an outstanding journey. Their technical expertise and innovative perspectives have seamlessly merged with our vision, resulting in an app that surpasses our expectations. ISD Solution's commitment to precision, user experience, and creativity has enhanced every facet of the app's functionality. Their cooperative approach and punctual delivery have not only made the entire process efficient but also enjoyable.”",
    },
    {
      pic: TestimonialTwo,
      client: "Enviro",
      designation: "Pakistan",
      content:
        "“Collaborating with ISD Solutions has been a transformative experience for Enviro. Their ability to craft innovative solutions that align seamlessly with our objectives has propelled our projects to new heights. ISD Solution's commitment to excellence and deep technical expertise have not only addressed our challenges but have also opened doors to new possibilities. With ISD Solutions as a partner, we've harnessed the power of technology to drive our success forward, and their contributions continue to shape our journey in remarkable ways.”",
    },
    {
      pic: TestimonialThree,
      client: "JW Vendor City",
      designation: "Pakistan",
      content:
        "“Working closely with ISD Solutions has been an exceptional journey. Their technical prowess and creative insights have seamlessly blended with our vision, resulting in an app that exceeds our expectations. ISD Solution's dedication to detail, user experience, and innovation has enriched every aspect of the app's functionality. Their collaborative approach and timely delivery have made the entire process not only efficient but also enjoyable and their partnership continues to be invaluable as we strive for excellence in the tech realm.”",
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
          {
            // <CiMenuFries
            //   onClick={toggleLayout}
            //   className="ml-lg-5 slide-open-btn-second "
            // />
          }
          <ScrollUp />

          <Row className="justify-content-center" style={{ marginTop: "-3%" }}>
            <Col xl={12}>
              <h1 className="web-heading text-center">Client Testimonials</h1>
              <p className="text-center web-sub-heading">
                According to our clients, ISD Solutions out as the best choice
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
                          <Col xl={4}>
                            <img
                              className=""
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

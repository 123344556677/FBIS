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
          <CiMenuFries
            onClick={toggleLayout}
            className="ml-lg-5 slide-open-btn-second "
          />
          <ScrollUp/>
          

          <Row
            className="justify-content-center"
            style={{ marginTop: "1%" }}
          >
            <Col xl={12}>
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

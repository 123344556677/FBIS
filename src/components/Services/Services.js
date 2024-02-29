import IndexNavbar from "components/Navbars/IndexNavbar";
import SlideLayout from "components/SlideLayout/SlideLayout";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import Footer from "components/Footer/Footer";
import { servicesText } from "Mock_data/Data";
import ViewPage from "components/ViewPage/ViewPage";
import ScrollUp from "../ScrollUp";
import { serviceCards } from "Mock_data/Data";

const Services = () => {
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
          text={servicesText}
          heading={"Services"}
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
            style={{ marginTop: "-5%" }}
          >
            
            <Col xl={12}>
              <h1 className="web-heading text-center"> SERVICES</h1>
              <p className="text-center web-sub-heading">
                The company is working with an aim to create the most trusted  
                name in IT solutions, both locally and <br /> internationally and we are not far away from that landmark as Friends IT Business Solutions is recognized internationally
                <br /> by a list of companies.
              </p>

              <Container>
                <Row className="mt-5">
                  {serviceCards.map((data, index) => (
                    <Col xl={4}>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <Card className="edge-cards">
                          <CardHeader>
                            <img
                              src={data?.pic}
                              alt=""
                              className="service-card-img"
                            />

                            <h5 className=" text-color services-card-heading mt-1">
                              {data?.heading}
                            </h5>
                          </CardHeader>
                          <CardBody>
                            <p className="text-color services-card-text">
                              {data?.content}
                            </p>
                          </CardBody>
                          <CardFooter>
                            {
                              // <Button className="mt-3">Load More -></Button>
                            }
                          </CardFooter>
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

export default Services;

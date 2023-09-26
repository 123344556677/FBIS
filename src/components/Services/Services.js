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
import { AiOutlineArrowUp } from "react-icons/ai";
import { servicesText } from "Mock_data/Data";
import ViewPage from "components/ViewPage/ViewPage";
import ScrollUp from "../ScrollUp";

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

  const serviceCards = [
    {
      class: "services-cards-color-one",
      pic: "https://drudotstech.com/img/service/service1.svg",
      heading: "IOS App Development",
      content:
        "Mobile application development services enable you to realise your mobile app ideas into feature-rich user experiences.",
    },
    {
      class: "services-cards-color-Two",
      pic: "https://drudotstech.com/img/service/service2.svg",
      heading: "Andriod App Development",
      content:
        "We channel your ideas into custom android apps that are feature-rich with user-centric.",
    },
    {
      class: "services-cards-color-Three",
      pic: "	https://drudotstech.com/img/service/service3.svg",
      heading: "Web Developement",
      content:
        "We build web applications that deliver remarkable functionality and user interface",
    },
    {
      class: "services-cards-color-Four",
      pic: "https://drudotstech.com/img/service/service5.svg",
      heading: "Mobile App Uploading",
      content:
        "Fast, Powerful & Most Secure Network Solutions for Smart startups & Businesses.",
    },
    {
      class: "services-cards-color-Five",
      pic: "https://drudotstech.com/img/service4.svg",
      heading: "Application Bug Fixes",
      content:
        "From priority bug-fixing, technical investigations and change requests, we’ll support and maintain your software.",
    },
    {
      class: "services-cards-color-Six",
      pic: "	https://drudotstech.com/img/service/service6.svg",
      heading: "UI/UX",
      content:
        "If you need a quick, efficient and secure data migration service with no disruption to your business, our experts can help.",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            className="justify-content-center mt-5"
            style={{ marginTop: "10%" }}
          >
            >
            <Col xl={12}>
              <h1 className="web-heading text-center"> SERVICES</h1>
              <p className="text-center web-sub-heading">
                The company is working with an aim to create the most trusted
                name in IOS development, both locally and <br /> internationally
                and we are not far away from that landmark as Hybsol Technology
                is recognized internationally
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
                              className={
                                data?.pic ===
                                "https://drudotstech.com/img/service4.svg"
                                  ? "service-card-img-app"
                                  : "service-card-img"
                              }
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

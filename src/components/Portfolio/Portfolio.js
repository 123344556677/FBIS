import IndexNavbar from "components/Navbars/IndexNavbar";
import SlideLayout from "components/SlideLayout/SlideLayout";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./Portfolio.css";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import Footer from "components/Footer/Footer";
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
import { projectText } from "Mock_data/Data";
import ViewPage from "components/ViewPage/ViewPage";
import ScrollUp from "../ScrollUp";

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

  const slideVariantsOne = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };

  const portfolioCards = [
    {
      pic: projectSeventeen,
    },
    {
      pic: projectTwo,
    },
    {
      pic: projectThree,
    },
    {
      pic: projectFour,
    },
    {
      pic: projectFive,
    },
    {
      pic: projectSix,
    },
  ];
  const iosProjects = [
    {
      pic: projectSeven,
    },
    {
      pic: projectEight,
    },
    {
      pic: projectNine,
    },
    {
      pic: projectTen,
    },
    {
      pic: projectEleven,
    },
    {
      pic: projectTwelve,
    },
  ];
  const andriodProjects = [
    {
      pic: projectThirteen,
    },
    {
      pic: projectFourten,
    },
    {
      pic: projectFifteen,
    },
    {
      pic: projectSixteen,
    },
    {
      pic: projectSeventeen,
    },
    {
      pic: projectEighteen,
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
          text={projectText}
          heading={"Projects"}
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
              <h1 className="web-heading text-center">Our Projects</h1>
              <p className="text-center web-sub-heading">
                The company is working with an aim to create the most trusted
                name in IT solutions, both locally and <br /> internationally
                and we are not far away from that landmark as ISD Solutions is
                recognized internationally
                <br /> by a list of companies.
              </p>
              <Container>
                <Row className=" justify-content-center">
                  {portfolioCards.map((data, index) => (
                    <Col xl={4} className="">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <img
                          src={data?.pic}
                          alt="#"
                          className=" projects-img"
                        />
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
          <hr style={{ width: "auto" }} />
          <Row
            className="justify-content-center mt-5"
            style={{ marginTop: "10%" }}
          >
            <Col xl={12}>
              <h1 className="web-heading text-center">IOS Applications</h1>
              <p className="text-center web-sub-heading">
                The company is working with an aim to create the most trusted
                name in IOS development, both locally and <br /> internationally
                and we are not far away from that landmark as Hybsol Technology
                is recognized internationally
                <br /> by a list of companies.
              </p>
              <Container>
                <Row className=" justify-content-center">
                  {iosProjects.map((data, index) => (
                    <Col xl={4} className="">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <img src={data?.pic} alt="#" className="projects-img" />
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
          <hr style={{ width: "auto" }} />
          <Row
            className="justify-content-center mt-5"
            style={{ marginTop: "10%" }}
          >
            <Col xl={12}>
              <h1 className="web-heading text-center">Andriod Applications</h1>
              <p className="text-center web-sub-heading">
                The company is working with an aim to create the most trusted
                name in andriod development, both locally and <br />{" "}
                internationally and we are not far away from that landmark as
                Hybsol Technology is recognized internationally
                <br /> by a list of companies.
              </p>
              <Container>
                <Row className=" justify-content-center">
                  {andriodProjects.map((data, index) => (
                    <Col xl={4} className="">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideVariantsOne}
                      >
                        <img
                          src={data?.pic}
                          alt="#"
                          className=" projects-img"
                        />
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

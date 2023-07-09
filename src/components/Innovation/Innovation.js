import IndexNavbar from "components/Navbars/IndexNavbar";
import React, { useState } from "react";
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
// import "./About.css";
import SlideLayout from "components/SlideLayout/SlideLayout";
import { CiMenuFries } from "react-icons/ci";
import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Innovation = () => {
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

  const innoCards = [
    {
      heading: "In the Lab",
      content:
        "Discover the technologies our R&D teams are experimenting and constantly working on to ensure our clients have a future proof business while always a step ahead of the market.",
    },
    {
      heading: "Articles",
      content:
        "Explore our articles section, and learn about the current global finance and leasing landscape through information, facts and figures regularly written by professionals from our global team.",
    },
    {
      heading: "Downloads",
      content:
        "View our collection of material and relevant resources pertaining to the global finance and leasing industry. Download infographics, profiles, videos and whitepapers.",
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
              <a className="breadcrums-link" onClick={()=>history('/innovation')}>Innovation</a>
            </p>
          </Col>
        </Row>
        <CiMenuFries
          onClick={toggleLayout}
          className="ml-lg-5 slide-open-btn-second "
        />
        <Container className="" style={{ marginTop: "10%" }}>
          <h1 className="text-color  page-headings mb-0">Innovation</h1>
          <p className="text-color page-text mt-2">
            HYBSOL Technologies maintains its position as a leader in providing
            innovative solutions to the global asset finance and leasing
            industry. This section is a knowledge hub with a collection of
            material and relevant resources divided into the technologies that
            are currently being worked on by our R&D teams in the lab as well as
            the latest collection of articles and downloads.
          </p>

          <Row>
            <div className="about-card"></div>
          </Row>
        </Container>

        <Container>
          <Row className="mt-5">
            {innoCards.map((data, index) => (
              <Col xl={4}>
                <Card className="edge-cards">
                  <CardHeader>
                    <h2 className="edge-card-heading text-color ">
                      {" "}
                      {data?.heading}{" "}
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <p className="edge-card-text mb-0"> {data?.content} </p>
                  </CardBody>
                  <CardFooter>
                    <Button className="home-btn">Explore</Button>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
          
        </Container>
        <Footer />
      </div>
      <SlideLayout value={isOpen} stateValue={handleState} />
    </>
  );
};

export default Innovation;

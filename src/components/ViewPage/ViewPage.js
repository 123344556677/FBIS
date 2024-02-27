import { handleEmailClick } from "components/Common";
import SlideLayout from "components/SlideLayout/SlideLayout";
import CanvasAnimation from "components/particles/CanvasAnimation";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Col, Row } from "reactstrap";

const ViewPage = ({ checkValue, text, heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    checkValue(false);
  }, []);

  const setHomeCheckValue = () => {
    checkValue(true);
  };

  const handleState = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="home-div"
        onWheel={setHomeCheckValue}
        style={{ marginTop: "1%" }}
      >
        <CanvasAnimation />
        <Row>
          <Col xl={2}>
            <p className="ml-lg-5 menu-text">MENU</p>
            <CiMenuFries
              onClick={toggleLayout}
              className="ml-lg-5 slide-open-btn "
            />
          </Col>
          <Col xl={8}>
            <h1 className="mb-2 home-main-heading ">{heading}</h1>
            {heading === "Friends IT Business Solutions." && (
              <h2 className="mb-2  home-sub-heading text-white">
                Innovate, Collaborate, Excel
              </h2>
            )}
            {heading === "Contact Us" && (
              <>
                <a
                  className="home-text text-white"
                  style={{ cursor: "pointer" }}
                  onClick={handleEmailClick}
                  href="www.hybsoltech.com"
                >
                  <span className="mr-2">
                    <img src="https://drudotstech.com/img/path.png" alt="" />
                  </span>
                  info@hysoltech.com
                </a>
                <br />
                <br />
                <a
                  className="home-text text-white"
                  style={{ cursor: "pointer" }}
                  href="www.hybsoltech.com"
                >
                  <span className="mr-2">
                    <img src="https://drudotstech.com/img/phone.png" alt="" />
                  </span>
                  +92 3224090041
                </a>
                <br />
                <br />
                <a
                  className="home-text text-white"
                  style={{ cursor: "pointer" }}
                  href="www.hybsoltech.com"
                >
                  <span className="mr-2">
                    <img src="	https://drudotstech.com/img/address.png" alt="" />
                  </span>
                  441 - G4 M.A Johar Town, Lahore
                </a>
              </>
            )}

            <p className="home-text text-white">{text}</p>
          </Col>
        </Row>
        <Row className="justify-content-center " style={{ marginTop: "12%" }}>
          <a
            className="explore-btn"
            alt="btn"
            href="#"
            onClick={setHomeCheckValue}
          >
            Explore
          </a>
        </Row>
      </div>
      <SlideLayout value={isOpen} stateValue={handleState} />
    </>
  );
};

export default ViewPage;

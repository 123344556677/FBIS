import React, { useEffect, useState } from "react";
import "./SlideLayout.css";
import { Container } from "reactstrap";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SlideLayout = ({ value, stateValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(value);
  }, [value]);

  const toggleLayout = () => {
    setIsOpen(false);
    stateValue(false);
  };
  const slideVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0, transition: { duration: 0.6 } },
  };

  const history = useNavigate();
  return (
    <Container fluid className={`slide-layout ${isOpen ? "open" : ""}`}>
      <AiOutlineClose className="slide-btn" onClick={toggleLayout} />
      <div className="background-text">I S D</div>
      <div className="contact-button">
        <button
          onClick={() => history("/contact")}
          className="contact-us-button"
        >
          Contact Us
        </button>
      </div>
      <motion.div initial="hidden" animate="visible" variants={slideVariants}>
        <div className="content">
          <div className="item">
            <span className="number mb-3">01</span>
            <span className="text " onClick={() => history("/")}>
              Home
            </span>
          </div>

          <div className="item">
            <span className="number ml-lg-4 mb-3">02</span>
            <span className="text ml-lg-4" onClick={() => history("/about")}>
              About Us
            </span>
          </div>
          <div className="item">
            <span className="number ml-lg-4 mb-3">03</span>
            <span className="text ml-lg-4" onClick={() => history("/projects")}>
              Projects
            </span>
          </div>
          <div className="item">
            <span className="number ml-lg-4 mb-3">04</span>
            <span className="text ml-lg-4" onClick={() => history("/services")}>
              Services
            </span>
          </div>
          <div className="item">
            <span className="number ml-lg-4 mb-3">05</span>
            <span
              className="text ml-lg-4"
              onClick={() => history("/testimonials")}
            >
              Testimonials
            </span>
          </div>
          <div className="item">
            <span className="number ml-lg-4 mb-3">06</span>
            <span className="text ml-lg-4" onClick={() => history("/contact")}>
              Contact
            </span>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default SlideLayout;

import IndexNavbar from "components/Navbars/IndexNavbar";
import SlideLayout from "components/SlideLayout/SlideLayout";
import React, { useState } from "react";
import { Button, Col, Container, Form, Input, Row } from "reactstrap";
import "./Contact.css";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Footer from "components/Footer/Footer";
import contactOne from "../../assets/img/c3.png";
import { initializeApp } from "firebase/app";
import Swal from "sweetalert2";
import "firebase/firestore";
import ViewPage from "components/ViewPage/ViewPage";
import { firebaseConfig } from "./firebaeConfig";
import ScrollUp from "../ScrollUp";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collectionref = collection(db, "hybsol-messages");

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [homeCheck, setHomeCheck] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [message, setMessage] = useState(false);

  const toggleLayout = () => {
    setIsOpen(!isOpen);
    setIsOpen(!isOpen);
  };

  const handleState = (val) => {
    setIsOpen(false);
  };
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };
  const slideVariantsOne = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8 } },
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const values = {
      name: name,
      email: email,
      message: message,
    };

    try {
      addDoc(collectionref, values).then((docRef) => {
        console.log(values);
        Swal.fire({
          icon: "success",
          text: "Message sent.",
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  const setHomeCheckValue = (val) => {
    setHomeCheck(val);
  };

  return (
    <>
      <IndexNavbar scrollCheck={homeCheck} />

      {homeCheck === false && (
        <ViewPage checkValue={setHomeCheckValue} heading={"Contact Us"} />
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

          <Container className="">
            <Row
              style={{ marginTop: "5%", marginBottom: "10%" }}
              className="justify-content-center"
            >
              <Col xl={6} className="text-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideVariantsOne}
                >
                  <img src={contactOne} alt="" className="contact-img mt-3" />
                </motion.div>
              </Col>

              <Col xl={6} className="text-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={slideVariants}
                >
                  <h3 className="contact-form-heading text-color">
                    Send Your Message!
                  </h3>
                  <Form onSubmit={onSubmit}>
                    <Input
                      defaultValue=""
                      placeholder="Name"
                      type="text"
                      autoComplete="text"
                      className="form-inputs"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <Input
                      defaultValue=""
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      className="form-inputs mt-4"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Input
                      defaultValue=""
                      placeholder="Message"
                      type="textarea"
                      autoComplete="text"
                      className="form-inputs-area mt-4"
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    <h1 className="text-right mt-4">
                      <Button type="submit" className="msg-button">
                        Send Email ->
                      </Button>
                    </h1>
                  </Form>
                </motion.div>
              </Col>
            </Row>
          </Container>

          <Footer />
        </div>
      )}
      <SlideLayout value={isOpen} stateValue={handleState} />
    </>
  );
};

export default Contact;

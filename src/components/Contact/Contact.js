import IndexNavbar from "components/Navbars/IndexNavbar";
import PageHeader from "components/PageHeader/PageHeader";
import SlideLayout from "components/SlideLayout/SlideLayout";
import ParticlesBackground from "components/particles/ParticlesBackground";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Contact.css";
import { CiMenuFries } from "react-icons/ci";
import Aos from "aos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CanvasAnimation from "components/particles/CanvasAnimation";
import { Firestore, addDoc, collection, getFirestore } from "firebase/firestore";
import ProfileModals from "components/Modals/ProfileModals";
import Footer from "components/Footer/Footer";
import contactOne from '../../assets/img/c1.jpg'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Swal from "sweetalert2";
import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA7ttrGwYsAZP2DDwFflgWBTg-4_D2jtJ8",
  authDomain: "hybsol-6220a.firebaseapp.com",
  projectId: "hybsol-6220a",
  storageBucket: "hybsol-6220a.appspot.com",
  messagingSenderId: "336104154275",
  appId: "1:336104154275:web:21317345fdbb46d5d24b16",
  measurementId: "G-7QZ3BXLL3D"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app)
const collectionref=collection(db,'hybsol-messages')    

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

  const handleEmailClick = () => {
    const recipient = "recipient@example.com";
    const subject = "Hello from React!";
    const body = "This is the body of the email.";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
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
  const history = useNavigate();
  const serviceCards = [
    {
      class: "services-cards-color-one",
      pic: "https://drudotstech.com/img/service1.svg",
      heading: "IOS App Development",
      content:
        "Mobile application development services enable you to realise your mobile app ideas into feature-rich user experiences.",
    },
    {
      class: "services-cards-color-Two",
      pic: "https://drudotstech.com/img/service2.svg",
      heading: "Andriod App Development",
      content:
        "We channel your ideas into custom android apps that are feature-rich with user-centric.",
    },
    {
      class: "services-cards-color-Three",
      pic: "https://drudotstech.com/img/service3.svg",
      heading: "Web Developement",
      content:
        "We build web applications that deliver remarkable functionality and user interface",
    },
    {
      class: "services-cards-color-Four",
      pic: "https://drudotstech.com/img/service4.svg",
      heading: "Mobile App Uploading",
      content:
        "Fast, Powerful & Most Secure Network Solutions for Smart startups & Businesses.",
    },
    {
      class: "services-cards-color-Five",
      pic: "https://drudotstech.com/img/service5.svg",
      heading: "Application Bug Fixes",
      content:
        "From priority bug-fixing, technical investigations and change requests, we’ll support and maintain your software.",
    },
    {
      class: "services-cards-color-Six",
      pic: "https://drudotstech.com/img/service6.svg",
      heading: "UI/UX",
      content:
        "If you need a quick, efficient and secure data migration service with no disruption to your business, our experts can help.",
    },
  ];
  const handleScroll = (event) => {
    
    setHomeCheck(true)
  };
  

  const onSubmit=async(e)=>{
    e.preventDefault();
      const values={
        name:name,
        email:email,
        message:message
      }
      console.log(values,"values=========>")
      try {
  addDoc(collectionref,values).then((docRef)=>{
    console.log(values)
      Swal.fire({
      icon: "success",
      text: "Message sent.",
    });
  
  })
}
catch(err){
  console.log(err)
}
}








  

  return (
    <>
     <IndexNavbar scrollCheck={homeCheck} />

      {homeCheck === false && (
        <div className="home-div" onWheel={handleScroll} style={{ marginTop: "15%" }}>
          <CanvasAnimation />
          <Row>
            <Col xl={2}>
              <CiMenuFries
                onClick={toggleLayout}
                className="ml-lg-5 slide-open-btn "
              />
            </Col>
            <Col xl={8}>
              <h1 className="mb-3 home-main-heading ">Contact Us</h1>

              <a className="home-text text-white" style={{cursor:"pointer"}} onClick={handleEmailClick}>
                <span className="mr-2">
                  <img src="https://drudotstech.com/img/path.png" alt="" />
                </span>
                info@hysoltech.com
              </a>
              <br />
              <br />
              <a className="home-text text-white" style={{cursor:"pointer"}}>
                <span className="mr-2">
                  <img src="https://drudotstech.com/img/phone.png" alt="" />
                </span>
                +92 3481609182
              </a>
              <br />
              <br />
              <a className="home-text text-white" style={{cursor:"pointer"}}>
                <span className="mr-2">
                  <img src="	https://drudotstech.com/img/address.png" alt="" />
                </span>
                441 - G4 M.A Johar Town, Lahore
              </a>
            </Col>
          </Row>
          <Row className="justify-content-center " style={{ marginTop: "12%" }}>
            <a
              className="explore-btn"
              alt=""
              onClick={() => setHomeCheck(true)}
            >
              Explore
            </a>
          </Row>
        </div>
      )}
      {homeCheck === true && (
        <div className="home-div main-div">
         <CiMenuFries
                onClick={toggleLayout}
                className="ml-lg-5 slide-open-btn-second "
              />
         
          <Container className="">
            <Row
              style={{ marginTop: "15%",marginBottom:"10%" }}
              className="justify-content-center"
            >
           
              <Col xl={6}>
               <motion.div
                initial="hidden"
                animate="visible"
                variants={slideVariantsOne}>
                <img src={contactOne} alt="" />
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
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
                <Input
                  defaultValue=""
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                  className="form-inputs mt-4"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
                <Input
                  defaultValue=""
                  placeholder="Message"
                  type="textarea"
                  autoComplete="text"
                  className="form-inputs-area mt-4"
                  onChange={(e)=>setMessage(e.target.value)}
                  required
                />
                <h1 className="text-right mt-4">
                <Button type="submit">Send Email -></Button></h1>
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

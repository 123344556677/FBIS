import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from '../../assets/img/logo.png'
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";




export default function Footer() {

  const handleEmailClick = () => {
    const recipient = "recipient@example.com";
    const subject = "Hello from React!";
    const body = "This is the body of the email.";

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  
  return (
    <footer className="main-footer ml-5 mr-5 mt-5">
      <Row>
        <Col xl={3} className="text-center">
          <img src={logo} alt="hybsol" className="mt-5" style={{width:"150px",height:"150px"}}/> 
        </Col>
        <Col xl={3}>
          <hr
            style={{
              backgroundColor: "#928585",
              width: "auto",
              height: "0.1px",
            }}
          />
          <h4 className="footer-headings text-color ">About Us</h4>
          <ul className="footer-list">
            <li className="footer-list-items">
              <a className="footer-links" href="/about">About</a>
            </li>
            <li className="footer-list-items">
              <a className="footer-links" href="/services">Services</a>
            </li>
            <li className="footer-list-items">
              <a className="footer-links" href="/projects">Projects</a>
            </li>
            <li className="footer-list-items">
              <a className="footer-links" href="/contact">Contact Us</a>
            </li>
          </ul>
        </Col>
        <Col xl={3}>
          <hr
            style={{
              backgroundColor: "#928585",
              width: "auto",
              height: "0.1px",
            }}
          />
          <h4 className="footer-headings text-color">Community</h4>
          <ul className="footer-list">
            <li className="footer-list-items">
              <a className="footer-links" href="/about">About Us</a>
            </li>
            <li className="footer-list-items">
              <a className="footer-links" href="/about">Our Team</a>
            </li>
            <li className="footer-list-items">
              <a className="footer-links" href="/testimonials">Testemonials</a>
            </li>
          </ul>
        </Col>
        <Col xl={3}>
          <hr
            style={{
              backgroundColor: "#928585",
              width: "auto",
              height: "0.1px",
            }}
          />
          <h4 className="footer-headings text-color">Location</h4>
          <ul className="footer-list">
            <li className="footer-list-items">
              <a className="footer-links"><span className="mr-2"><AiFillPhone/></span> +92-326-122-4033</a>
            </li>
            <li className="footer-list-items">
               <a className="footer-links" onClick={handleEmailClick}><span className="mr-2" ><AiFillMail/></span> info@hybsoltech.com</a>
            </li>
            <li className="footer-list-items">
               <a className="footer-links"><span className="mr-2"><CiLocationOn/></span> 441 - G4 M.A Johar Town, Lahore</a>
            </li>
            
          </ul>
        </Col>
      </Row>

      {
      //    <Row>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color">CONTACT US</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">Corporate Headquarters</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">16000 Ventura Blvd;</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Suite 770</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">USA</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">+1 818 222 9195</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">info@hybsoltech.com</a>
      //       </li>
      //     </ul>
      //   </Col>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color ">COMPANY</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">About Us</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Board Of Directors</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Management Team</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Social Responsibilities</a>
      //       </li>
      //     </ul>
      //   </Col>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color">NFS SCENT</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">Front Office</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Back Office</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Self Service</a>
      //       </li>
      //     </ul>
      //   </Col>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color">NFS DIGITAL</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">Self Point of Sale</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Mobile Account</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Mobile Point of Sale</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Web Point of Sale</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Mobile Field Investigator</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Mobile Collector</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Mobile Dealer</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Mobile Auditor</a>
      //       </li>
      //     </ul>
      //   </Col>
      // </Row>
      
      // <Row>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color">OFFICES</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           Encino
      //           <span className="ml-3"> +1 818 222 9195</span>
      //         </a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           Encino
      //           <span className="ml-3"> +1 818 222 9195</span>
      //         </a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           Encino
      //           <span className="ml-3"> +1 818 222 9195</span>
      //         </a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           Encino
      //           <span className="ml-3"> +1 818 222 9195</span>
      //         </a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           Encino
      //           <span className="ml-3"> +1 818 222 9195</span>
      //         </a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           Encino
      //           <span className="ml-3"> +1 818 222 9195</span>
      //         </a>
      //       </li>
      //     </ul>
      //   </Col>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color ">INVESTORS</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">Overview</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Company Information</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">News</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Stock Data</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">SEC filing</a>
      //       </li>
      //     </ul>
      //   </Col>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color">INNOVATION</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">Overview</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Articles</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">In the Lab</a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">Download</a>
      //       </li>
      //     </ul>
      //   </Col>
      //   <Col xl={3}>
      //     <hr
      //       style={{
      //         backgroundColor: "#928585",
      //         width: "auto",
      //         height: "0.1px",
      //       }}
      //     />
      //     <h4 className="footer-headings text-color">FOLLOW</h4>
      //     <ul className="footer-list">
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           LinkedIn
      //           <span className="ml-5">
      //             <FaLinkedin className="about-footer-icons" />
      //           </span>
      //         </a>
      //       </li>
      //       <li className="footer-list-items">
      //         <a className="footer-links">
      //           Twitter
      //           <span className="about-footer-twitter">
      //             <FaTwitter className="about-footer-icons " />
      //           </span>
      //         </a>
      //       </li>
      //     </ul>
      //   </Col>
      // </Row>
      }
    </footer>
  );
}

import React from "react";
import "./Footer.css";
import logo from '../../assets/img/logo-grey.png'
// reactstrap components
import {
   Row,
   Col,
 } from "reactstrap";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { handleEmailClick } from "components/Common";




export default function Footer() {

  

  
  return (
    <footer className="main-footer mt-5">
      <Row className="">
        <Col xl={3} className="text-center mb-4">
          <img src={logo} alt="hybsol" className="mt-2" style={{width:"200px",height:"200px"}}/> 
        </Col>
        <Col xl={3} className="mt-5 mb-4">
         
          <h4 className="footer-headings  ">About Us</h4>
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
        <Col xl={3} className="mt-5 mb-4">
          
          <h4 className="footer-headings ">Community</h4>
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
        <Col xl={3} className="mt-5 mb-4">
          
          <h4 className="footer-headings ">Location</h4>
          <ul className="footer-list">
            <li className="footer-list-items">
              <a className="footer-links"><span className="mr-2"><AiFillPhone/></span> +92 3224090041</a>
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
    </footer>
  );
}

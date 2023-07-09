import React, { useEffect, useState } from "react";
import { Button, Col, FormGroup, Input, Label, Modal, Row } from "reactstrap";
import './Modal.css'
import {FaLinkedinIn} from 'react-icons/fa';




const ProfileModals = (props) => {
  const [userData, setUserData] = useState();
  const [username, setUsername] = useState(userData?.username);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [website, setWebsite] = useState(userData?.website);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber);
  const [userId, setuserId] = useState(
    JSON.parse(localStorage.getItem("keys"))
  );
  const [profilePic, setProfilePic] = useState(userData?.profilePic);
  
  console.log(props, "modaValue===========>");
  const Values = {
    userId: userId.id,
  };
 


  function toggleModal() {
    setShowModal(!showModal);
  }
 const teamDetails=[
    {
        heading:"Najeeb Ghauri",
        belowText:"Founder, Chairman & Chief Executive Officer, NETSOL Technologies, Inc.",   
        content:"Mr. Najeeb Ghauri is the founder, chairman of the board of directors and CEO of NETSOL Technologies, Inc. In the early years of the company, Mr. Ghauri was responsible for restructuring NETSOL's business model into that of an IT company. Additionally, he was instrumental in the completion of the NETSOL Technologies, Inc. initial public offering in 1998, as well as listing the company's major Pakistan-based subsidiary, NETSOL Technologies Ltd., on the Karachi Stock Exchange in 2005. Prior to launching NETSOL in the U.S., Mr. Ghauri had over 15 years of combined marketing and management experience with Fortune 500 companies such as Unilever and Atlantic Richfield Corporation (ARCO). Mr. Ghauri is also active in various charitable and educational non-governmental organizations (NGOs) worldwide. He is a founding board member of the Pakistan Human Development Fund, which provides educational tools to children in underdeveloped areas of Pakistan."
    }
  ]
  
  return (
    <div className="">
      <div>
      <Row>
      <Col className="ml-3">
      <h1 className="text-center ml-5 mb-0">
       <Button className="profile-button" onClick={toggleModal}>Open</Button>
       
       </h1>
       </Col>
       <Col className="text-right">
        <FaLinkedinIn className="linkedin-icon mt-3"/> 
        </Col>
        </Row>
    
        <Modal
          isOpen={showModal}
          toggle={toggleModal}
          className=""
          style={{maxWidth:"70%"}}
          
        >
          <div className="modal-header"></div>
          <div className="modal-body home-modal">
          {
      teamDetails.map((data,index)=>(
        <>
    
    <h2 className="edge-card-heading text-color mb-0 text-center"> {data?.heading} </h2>
    
    <p className='edge-card-text text-center'> {data?.belowText} </p>
   <p className='edge-card-text text-center mt-4'> {data?.content} </p>
   </>
   
    
    
    
      ))
    }
           
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileModals;

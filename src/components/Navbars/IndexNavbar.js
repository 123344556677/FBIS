import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import logoOne from "../../assets/img/logoOne.png";
import "./Navbar.css";
// reactstrap components
import {Navbar,Container} from "reactstrap";

export default function IndexNavbar(props) {
  const [checkLogo, setCheckLogo] = React.useState(true);
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  return (
    <Navbar
      color-on-scroll="100"
      expand="lg"
      onWheel={() => setCheckLogo(false)}
      style={{ background: props.scrollCheck ? "white" : "transparent" }}
    >
      <Container>
        <div className="navbar-translate" onWheel={() => setCheckLogo(false)}>
          <img
            src={props.scrollCheck ? logo : logoOne}
            alt=""
            className="logo"
          />
          
        </div>
      </Container>
    </Navbar>
  );
}

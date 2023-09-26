import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { scrollToTop } from "components/Common";

const ScrollUp = () => {
  return (
    <div className="bottom-right">
      <AiOutlineArrowUp onClick={scrollToTop} className="bottom-right-button" />
    </div>
  );
};

export default ScrollUp;

import React from "react"
import {FaTimes,FaRegCircle,FaPen} from "react-icons/fa";

const Icon = ({ name }) =>{
    
    switch (name) {
        case "Circle":
          return <FaRegCircle className="icons" />;
        case "Cross":
          return <FaTimes className="icons" />;
        default:
          return <FaPen className="icons" />;
      }
    
};

export default Icon;
import React, { useState } from "react";
import "./Slider1.css";
import { dataSlider } from "../../service/service";

function Slider1() {

    const [num,setnum]=useState(1)

  return (
    <div className="slider" style={{ "--width": "120px", "--height": "120px", "--quantity":"10" }}>
      <div className="list">
        {dataSlider.map((res, index) => {
          return (
            <img key={index} style={{"--position":index+1}} className="item" src={res.image} alt="imagen" />
          );
        })}
      </div>
    </div>
  );
}

export default Slider1;

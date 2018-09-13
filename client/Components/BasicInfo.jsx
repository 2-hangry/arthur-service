import React from "react";
import ReviewHealth from "./ReviewHealth.jsx";
import PriceRange from "./PriceRange.jsx";
const moment = require("moment");

const imageStyle = {
  width: 25,
  height: 25
};

const textStyle = {
  marginTop: 8,
  marginLeft: 7,
  fontSize: 14,
  fontFamily: "sans-serif"
};

const BasicInfo = props => {
  const time = props.businessHours.open[moment().format("d") - 1];
  const start = moment(Math.floor(time.start) / 100, "HH").format("hh:mm a");
  const end = moment(Math.floor(time.end) / 100, "HH").format("hh:mm a");
  let current = moment().format("hh:mm a");
  return (
    <div>
      <span style={{ display: "flex" }}>
        <img
          src="https://png.icons8.com/metro/50/27ae60/clock.png"
          style={imageStyle}
        />
        <p style={textStyle}>
          Today {start} - {end}
        </p>
        {end > current && start < end ? <p style={textStyle}>Open Now</p> : <p style={textStyle}>Closed Now</p>}
      </span>
      <PriceRange price={props.price} />
      <ReviewHealth rating={props.rating} />
      <a href="https://icons8.com" />
    </div>
  );
};

export default BasicInfo;

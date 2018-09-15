import React from "react";
import ReviewHealth from "./ReviewHealth.jsx";
import PriceRange from "./PriceRange.jsx";
const moment = require("moment");

const imageStyle = { width: 28, height: 28 };
const hoursTodayStyling = { marginTop: 7, marginLeft: 5 };
const hrStyling = { marginLeft: 11 + "%", marginRight: 2 + "%" };


const BasicInfo = props => {
  const time = props.businessHours.open[moment().format("d") - 1];
  const start = moment(Math.floor(time.start) / 100, "HH").format("hh:mm a");
  const end = moment(Math.floor(time.end) / 100, "HH").format("hh:mm a");
  let current = moment().format("hh:mm a");
  
  return (
    <div>
      <span style={{ display: "flex" }}>
        {end > current && current < end ? (
          <img
            src="https://png.icons8.com/metro/50/27ae60/clock.png"
            style={imageStyle}
          />
        ) : (
          <img
            src="https://png.icons8.com/metro/50/fc0000/clock.png"
            style={imageStyle}
          />
        )}
        <p style={hoursTodayStyling}>{" "}Today</p>
        <p style={Object.assign({ fontWeight: "bold" }, hoursTodayStyling)}>
          {start} - {end}
        </p>
        {end > current && current < end ? (
          <p
            style={Object.assign(
              {
                fontWeight: "bold",
                color: "green"
              },
              hoursTodayStyling
            )}
          >
            {" "}
            Open Now
          </p>
        ) : (
          <p
            style={Object.assign(
              {
                fontWeight: "bold",
                color: "red"
              },
              hoursTodayStyling
            )}
          >
            {" "}
            Closed Now
          </p>
        )}
      </span>
      <hr style={hrStyling} />
      <PriceRange price={props.price} />
      <hr style={hrStyling} />
      <ReviewHealth rating={props.rating} />
      <a href="https://icons8.com" />
    </div>
  );
};

export default BasicInfo;

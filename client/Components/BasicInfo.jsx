import React from "react";
import ReviewHealth from "./ReviewHealth.jsx";
import PriceRange from "./PriceRange.jsx";
const moment = require("moment");

const imageStyle = { width: 25, height: 25 };

const textStyle = { fontSize: 14, fontFamily: "sans-serif" };

const hoursTodayStyling = { marginTop: 7, marginLeft: 5 };

const BasicInfo = props => {
  const time = props.businessHours.open[moment().format("d") - 1];
  const start = moment(Math.floor(time.start) / 100, "HH").format("hh:mm a");
  const end = moment(Math.floor(time.end) / 100, "HH").format("hh:mm a");
  let current = moment().format("hh:mm a");
  return (
    <div style={textStyle}>
      <span style={{ display: "flex" }}>
        <img
          src="https://png.icons8.com/metro/50/27ae60/clock.png"
          style={imageStyle}
        />
        <p style={hoursTodayStyling}>Today</p>
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
      <PriceRange price={props.price} />
      <ReviewHealth rating={props.rating} />
      <a href="https://icons8.com" />
    </div>
  );
};

export default BasicInfo;

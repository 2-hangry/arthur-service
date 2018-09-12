import React from "react";
import Day from "./DailyHours.jsx";
const divStyle = {
  color: "red",
  fontFamily: "sans-serif",
  fontSize: 14+'px'
};

const Hours = props => {
  return (
    <div>
      <h3 style={divStyle}>Hours</h3>
      <table>
        <tbody>
          {props.hours.open.map(day => {
            return <Day day={day} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Hours;

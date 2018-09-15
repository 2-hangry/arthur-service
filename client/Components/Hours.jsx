import React from "react";
import DailyHours from "./DailyHours.jsx";
const divStyle = {
  color: "red",
  fontSize: 14
};

const Hours = props => {
  return (
    <div>
      <h3 style={divStyle}>Hours</h3>
      <table>
        <tbody>
          {props.hours.open.map(day => {
            return <DailyHours day={day} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Hours;

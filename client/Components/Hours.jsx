import React from "react";
import Day from "./Day.jsx";

const Hours = props => {
  return (
    <div>
      <h3>Hours</h3>
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

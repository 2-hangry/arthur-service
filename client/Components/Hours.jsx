import React from "react";
import Day from "./Day.jsx";

const Hours = props => {
//   console.log(props.hours, " the hours prop");
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

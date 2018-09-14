import React from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(Moment);

const fontStyle = {
  fontSize: 14 + "px",
  fontFamily: "sans-serif",
  textAlign: "left"
};

const DailyHours = props => {
  const week = {
    0: "Mon",
    1: "Tue",
    2: "Wed",
    3: "Thu",
    4: "Fri",
    5: "Sat",
    6: "Sun"
  };
  let day = week[props.day.day];
  const start = moment(Math.floor(props.day.start) / 100, "HH").format(
    "hh:mm a"
  );
  const end = moment(Math.floor(props.day.end) / 100, "HH").format("hh:mm a");
  let current = moment().format("hh:mm a");
  let hours = start + " - " + end;

  return (
    <tr style={fontStyle}>
      <th>{day}</th>
      <td>{hours}</td>
      {end > current && current < end && props.day.day === Number(moment().format('d'))-1 ? (
        <p style={{fontWeight: 'bold', color: 'green'}}>Open Now</p>
      ) : (
        <p />
      )}
    </tr>
  );
};

export default DailyHours;

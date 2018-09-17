import React from "react";
import Moment from "moment";
import { extendMoment } from "moment-range";
import styles from '../../styles.css.js';
const moment = extendMoment(Moment);


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
    <tr style={ styles.generalFontFormat }>
      <th style={styles.alignDay}>{day}</th>
      <td>{hours}</td>
      {moment(current, "hh:mm a").isBetween(moment(start, "hh:mm a"), moment(end, "hh:mm a")) && props.day.day === Number(moment().format('d'))-1 ? (
        <p style={styles.openNowStyling}>Open Now</p>
      ) : (
        <p />
      )}
    </tr>
  );
};

export default DailyHours;

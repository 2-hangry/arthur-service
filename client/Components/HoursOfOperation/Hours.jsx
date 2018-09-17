import React from "react";
import DailyHours from "./DailyHours.jsx";
import styles from '../../styles.css.js';

const Hours = props => {
  return (
    <div>
      <p style={styles.sectionTitle}>Hours</p>
      <table>
        <tbody>
          {props.hours.open.map(day => {
            return <DailyHours day={day} />;
          })}
        </tbody>
      </table>
      <span>
          <img style={styles.editInfoPencil} src="https://png.icons8.com/ios/50/2e6d97/edit.png"></img>
          <a href="https://www.yelp.com" style={styles.editInfoStyling}>Edit business info</a>
      </span>
    </div>
  );
};

export default Hours;

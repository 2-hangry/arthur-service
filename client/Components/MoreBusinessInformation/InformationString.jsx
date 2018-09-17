import React from "react";
import styles from '../../styles.css.js';


const InformationString = props => {
  if (typeof props.info[1] === "boolean") {
    return (
      <div style={styles.moreBusinessInfoFontSize}>
        <br />
        <span>{props.info[0]}</span>
        {props.info[1] ? (
          <span style={styles.fontBolded}> Yes</span>
        ) : (
          <span style={styles.fontBolded}> No</span>
        )}
      </div>
    );
  } else {
    return (
      <div style={styles.moreBusinessInfoFontSize}>
        <br />
        <span>{props.info[0]}</span>
        <span style={styles.fontBolded}> {props.info[1]}</span>
      </div>
    );
  }
};

export default InformationString;

import React from "react";
import InformationString from "./InformationString.jsx";
import styles from '../../styles.css.js';

const MoreInfo = props => {
  const infoArr = Object.entries(props.moreInfo);
  return (
    <div>
      <p style={styles.sectionTitle}>More Business Info</p>
      <div>
        {infoArr.map(info => {
          return <InformationString info={info} />;
        })}
      </div>
    </div>
  );
};

export default MoreInfo;

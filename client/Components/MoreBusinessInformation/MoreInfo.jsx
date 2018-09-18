import React from 'react';
import InformationString from './InformationString';
import styles from '../../styles.css';

const MoreInfo = (props) => {
  const { moreInfo } = props;
  const infoArr = Object.entries(moreInfo);
  return (
    <div>
      <p style={styles.sectionTitle}>More Business Info</p>
      <div>
        {infoArr.map(info => (
          <InformationString info={info} />
        ))}
      </div>
    </div>
  );
};

export default MoreInfo;

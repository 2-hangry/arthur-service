import React from 'react';
import InformationString from './InformationString';
import styles from '../../styles.css';

const MoreInfo = (props) => {
  const { moreInfo } = props;
  const infoArr = Object.entries(moreInfo);
  const writtenInfo = infoArr.map(info => <InformationString key={info[0]} info={info} />);
  return (
    <div>
      <p style={styles.sectionTitle}>More Business Info</p>
      <div>{writtenInfo}</div>
    </div>
  );
};

export default MoreInfo;

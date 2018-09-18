import React from 'react';
import styles from '../../styles.css';

const InformationString = (props) => {
  const { info } = props;

  if (typeof info[1] === 'boolean') {
    return (
      <div style={styles.moreBusinessInfoFontSize}>
        <br />
        <span>{info[0]}</span>
        {info[1] ? (
          <span style={styles.fontBolded}> Yes</span>
        ) : (
          <span style={styles.fontBolded}> No</span>
        )}
      </div>
    );
  }
  return (
    <div style={styles.moreBusinessInfoFontSize}>
      <br />
      <span>{info[0]}</span>
      <span style={styles.fontBolded}>
        {' '}
        {info[1]}
      </span>
    </div>
  );
};

export default InformationString;

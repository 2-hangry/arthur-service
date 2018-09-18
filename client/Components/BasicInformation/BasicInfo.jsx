import React from 'react';
import PropTypes from 'prop-types';
import ReviewHealth from './ReviewHealth';
import PriceRange from './PriceRange';
import styles from '../../styles.css';

const moment = require('moment');

const BasicInfo = (props) => {
  const { businessHours, price, rating } = props;
  const time = businessHours.open[moment().format('d') - 1];
  const start = moment(Math.floor(time.start) / 100, 'HH').format('hh:mm a');
  const end = moment(Math.floor(time.end) / 100, 'HH').format('hh:mm a');
  const current = moment().format('hh:mm a');

  return (
    <div>
      <span style={{ display: 'flex' }}>
        {moment(current, 'hh:mm a').isBetween(moment(start, 'hh:mm a'), moment(end, 'hh:mm a')) ? (
          <img
            src="https://png.icons8.com/metro/50/27ae60/clock.png"
            alt="Clock"
            style={styles.clockStyling}
          />
        ) : (
          <img
            src="https://png.icons8.com/metro/50/fc0000/clock.png"
            alt="Clock"
            style={styles.clockStyling}
          />
        )}
        <p style={styles.hoursTodayStyling}> Today</p>
        <p style={Object.assign({ fontWeight: 'bold' }, styles.hoursTodayStyling)}>
          {start}
          {' '}
-
          {end}
        </p>
        {moment(current, 'hh:mm a').isBetween(moment(start, 'hh:mm a'), moment(end, 'hh:mm a')) ? (
          <p
            style={Object.assign({ fontWeight: 'bold', color: 'green' }, styles.hoursTodayStyling)}
          >
            {' '}
            Open Now
          </p>
        ) : (
          <p style={Object.assign({ fontWeight: 'bold', color: 'red' }, styles.hoursTodayStyling)}>
            {' '}
            Closed Now
          </p>
        )}
      </span>
      <hr style={styles.horizontalRuleStyling} />
      <PriceRange price={price} />
      <hr style={styles.horizontalRuleStyling} />
      <ReviewHealth rating={rating} />
    </div>
  );
};

export default BasicInfo;

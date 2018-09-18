import React from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import styles from '../../styles.css.js';

const moment = extendMoment(Moment);

const DailyHours = (props) => {
  const week = {
    0: 'Mon',
    1: 'Tue',
    2: 'Wed',
    3: 'Thu',
    4: 'Fri',
    5: 'Sat',
    6: 'Sun',
  };
  const day = week[props.day.day];
  const start = moment(Math.floor(props.day.start) / 100, 'HH').format('hh:mm a');
  const end = moment(Math.floor(props.day.end) / 100, 'HH').format('hh:mm a');
  const current = moment().format('hh:mm a');
  const hours = `${start} - ${end}`;

  return (
    <tr style={styles.generalFontFormat}>
      <th style={styles.alignDay}>{day}</th>
      <td>{hours}</td>
      {moment(current, 'hh:mm a').isBetween(moment(start, 'hh:mm a'), moment(end, 'hh:mm a'))
      && props.day.day === Number(moment().format('d')) - 1 ? (
        <td style={styles.openNowStyling}>Open Now</td>
        ) : (
          <td />
        )}
    </tr>
  );
};

export default DailyHours;

import React from 'react';
import DailyHours from './DailyHours';
import styles from '../../styles.css';

const Hours = (props) => {
  const { hours } = props;
  const week = hours.open.map(day => <DailyHours key={day.day} day={day} />);
  return (
    <div>
      <p style={styles.sectionTitle}>Hours</p>
      <table>
        <tbody>{week}</tbody>
      </table>
      <span>
        <img
          style={styles.editInfoPencil}
          src="https://png.icons8.com/ios/50/2e6d97/edit.png"
          alt="Pencil"
        />
        <a href="https://www.yelp.com" style={styles.editInfoStyling}>
          Edit business info
        </a>
      </span>
    </div>
  );
};

export default Hours;

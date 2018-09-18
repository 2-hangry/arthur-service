import React from 'react';
import styled from 'styled-components';
import BusinessModal from './FromTheBusinessModal';
import styles from '../../styles.css';

const Intro = styled.p`
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const FromTheBusiness = (props) => {
  const { fromBusiness, restaurantName } = props;
  return (
    <div>
      <p style={styles.sectionTitle}>From The Business</p>
      <Intro>{fromBusiness}</Intro>
      <BusinessModal restaurantName={restaurantName} restaurantInfo={fromBusiness} />
    </div>
  );
};

export default FromTheBusiness;

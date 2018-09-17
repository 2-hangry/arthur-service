import React from "react";
import BusinessModal from './FromTheBusinessModal.jsx'
import styles from '../../styles.css.js';
import styled from 'styled-components';

const Intro = styled.p`
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`


const FromTheBusiness = props => {
  return (
    <div>
      <p style={styles.sectionTitle}>From The Business</p>
      <Intro>{props.fromBusiness}</Intro>
      <BusinessModal restaurantName={props.restaurantName} restaurantInfo={props.fromBusiness}/>
    </div>
  );
};


export default FromTheBusiness;
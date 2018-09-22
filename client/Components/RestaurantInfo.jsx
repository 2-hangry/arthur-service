import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BasicInfo from './BasicInformation/BasicInfo';
import Hours from './HoursOfOperation/Hours';
import MoreInfo from './MoreBusinessInformation/MoreInfo';
import FromTheBusiness from './FromTheBusiness/FromTheBusiness';
import styles from '../styles.css';

const Container = styled.div`
  font-size: 14px;
  font-family: sans-serif;
  width 300px;
  float: right;
`;

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
    };
  }

  componentDidMount() {
    const context = this;

    // set to only handle a total of 100 restaurants
    let validator = window.location.pathname || '/businesses/0/';
    if (!(Number(validator.slice(12, -1)) < 99 && Number(validator.slice(12, -1)) > -1)) {
      console.log(' making change');
      validator = '/businesses/0/';
    }
    console.log(`/api${validator}restaurantInfo`, ' template deloy', validator);
    axios.get(`/api${validator}restaurantInfo`).then((response) => {
      if (response.data !== '') {
        context.setState({
          restaurant: response.data,
        });
      }
    });
  }

  render() {
    const { restaurant } = this.state;
    if (restaurant === null) {
      return <div>Loading...</div>;
    }
    return (
      <Container>
        <div style={styles.basicBorder}>
          <BasicInfo
            businessHours={restaurant.hours[0]}
            price={restaurant.price}
            rating={restaurant.rating}
          />
        </div>
        <div style={{ borderLeft: 1, solid: 'black', height: 500 }}>
          <Hours hours={restaurant ? restaurant.hours[0] : null} />
          <MoreInfo moreInfo={restaurant.more_info} />
          <FromTheBusiness
            fromBusiness={restaurant['From the Business']}
            restaurantName={restaurant.name}
          />
        </div>
        <a href="https://icons8.com">.</a>
      </Container>
    );
  }
}

export default RestaurantInfo;

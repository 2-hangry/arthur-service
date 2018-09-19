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
  float: right;
`;

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      searchRequest: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    const context = this;

    // set to only handle a total of 100 restaurants
    let validator = window.location.pathname;
    if (!(Number(validator.slice(12, -1)) < 99 && Number(validator.slice(12, -1)) > -1)) {
      console.log(' making change');
      validator = '/businesses/0/';
    }

    axios.get(`/api${validator}restaurantInfo`).then((response) => {
      if (response.data !== '') {
        context.setState({
          restaurant: response.data,
        });
      }
    });
  }

  formSubmit(e) {
    e.preventDefault();
    const { searchRequest } = this.state;
    const context = this;
    axios.get(`/${searchRequest}/restaurantInfo`).then((response) => {
      if (response.data !== '') {
        context.setState({
          restaurant: response.data,
        });
      }
    });
  }

  handleChange(e) {
    this.setState({
      searchRequest: e.target.value,
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
        <Hours hours={restaurant ? restaurant.hours[0] : null} />
        <MoreInfo moreInfo={restaurant.more_info} />
        <FromTheBusiness
          fromBusiness={restaurant['From the Business']}
          restaurantName={restaurant.name}
        />
        <a href="https://icons8.com">.</a>
      </Container>
    );
  }
}

export default RestaurantInfo;

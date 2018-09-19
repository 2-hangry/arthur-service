import React from 'react';
import axios from 'axios';
import Search from './Search';
import BasicInfo from './BasicInformation/BasicInfo';
import Hours from './HoursOfOperation/Hours';
import MoreInfo from './MoreBusinessInformation/MoreInfo';
import FromTheBusiness from './FromTheBusiness/FromTheBusiness';
import styles from '../styles.css';

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
    axios.get(`/restaurantInfo/${0}`).then((response) => {
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
    axios.get(`/restaurantInfo/${searchRequest}`).then((response) => {
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
      console.log(restaurant, ' the rest');
      return <Search handleChange={this.handleChange} submit={this.formSubmit} />;
    }
    return (
      <div style={Object.assign({ float: 'right' }, styles.generalFontFormat)}>
        <Search handleChange={this.handleChange} submit={this.formSubmit} />
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
      </div>
    );
  }
}

export default RestaurantInfo;

import React from "react";
import axios from "axios";
import Search from "./Search.jsx";
import BasicInfo from "./BasicInformation/BasicInfo.jsx";
import Hours from "./HoursOfOperation/Hours.jsx";
import MoreInfo from "./MoreBusinessInformation/MoreInfo.jsx";
import FromTheBusiness from "./FromTheBusiness/FromTheBusiness.jsx";
import styles from '../styles.css.js';

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      searchRequest: null
    };
  }

  handleChange(e) {
    this.setState({
      searchRequest: e.target.value
    });
  }

  formSubmit(e) {
    e.preventDefault();
    const context = this;
    axios
      .get(`/restaurantInfo/${this.state.searchRequest}`)
      .then(function(response) {
        if (response.data !== "") {
          context.setState({
            restaurant: response.data
          });
        }
      });
  }

  componentDidMount () {
    const context = this;
    axios
      .get(`/restaurantInfo/${0}`)
      .then(function(response) {
        if (response.data !== "") {
          context.setState({
            restaurant: response.data
          });
        }
      });
  }


  render() {
    if (this.state.restaurant === null) {
      return (
        <Search
          handleChange={this.handleChange.bind(this)}
          submit={this.formSubmit.bind(this)}
        />
      );
    } else {
      return (
        <div style={Object.assign({float: 'right'}, styles.generalFontFormat)}>
          <Search
            handleChange={this.handleChange.bind(this)}
            submit={this.formSubmit.bind(this)}
          />
          <div style={styles.basicBorder}>
            <BasicInfo
              businessHours={this.state.restaurant.hours[0]}
              price={this.state.restaurant.price}
              rating={this.state.restaurant.rating}
            />
          </div>
          <Hours
            hours={
              this.state.restaurant ? this.state.restaurant.hours[0] : null
            }
          />
          <MoreInfo moreInfo={this.state.restaurant.more_info} />
          <FromTheBusiness
            fromBusiness={this.state.restaurant["From the Business"]}
            restaurantName={this.state.restaurant.name}
          />
        </div>
      );
    }
  }
}

export default RestaurantInfo;
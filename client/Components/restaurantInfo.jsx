import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Hours from "./Hours.jsx";
import MoreInfo from "./MoreInfo.jsx";
import Search from "./Search.jsx";
import BasicInfo from "./BasicInfo.jsx";

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
    console.log(" the submit button was hit");
    axios
      .get(`/restaurantInfo/${this.state.searchRequest}`)
      .then(function(response) {
        context.setState({
          restaurant: response.data
        });
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
        <div>
          <Search
            handleChange={this.handleChange.bind(this)}
            submit={this.formSubmit.bind(this)}
          />
          <BasicInfo
            businessHours={this.state.restaurant.hours[0]}
            price={this.state.restaurant.price}
            rating={this.state.restaurant.rating}
          />
          <Hours
            hours={
              this.state.restaurant ? this.state.restaurant.hours[0] : null
            }
          />
          <MoreInfo moreInfo={this.state.restaurant} />
        </div>
      );
    }
  }
}

ReactDOM.render(<RestaurantInfo />, document.getElementById("app"));

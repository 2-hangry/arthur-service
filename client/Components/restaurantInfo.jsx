import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Hours from "./Hours.jsx";
import MoreInfo from "./MoreInfo.jsx";
import Search from "./Search.jsx";
import BasicInfo from "./BasicInfo.jsx";
import FromTheBusiness from "./FromTheBusiness.jsx";

const fontStyle = {
  fontSize: 14,
  fontFamily: "sans-serif"
};

const basicBorder = {
  borderColor: "#cacad0",
  borderWidth: "thin",
  borderStyle: "solid",
  padding: 3,
  maxWidth: 300,
  borderRadius: 3
};

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
        <div style={fontStyle}>
          <Search
            handleChange={this.handleChange.bind(this)}
            submit={this.formSubmit.bind(this)}
          />
          <div style={basicBorder}>
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
          <MoreInfo moreInfo={this.state.restaurant} />
          <FromTheBusiness
            fromBusiness={this.state.restaurant["From the Business"]}
          />
        </div>
      );
    }
  }
}

ReactDOM.render(<RestaurantInfo />, document.getElementById("app"));

import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Hours from "./Hours.jsx";

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        id: 0,
        name: "Jacobs - Balistreri",
        url: "/restaurantInfo/0",
        price: "$$$$",
        rating: "4.1",
        review_count: 816,
        phone: "606.690.1799",
        location: {
          address1: "0694 Corwin Motorway Apt. 457",
          city: "San Francisco",
          state: "CA",
          zip_code: "94109",
          country: "US"
        },
        hours: [
          {
            open: [
              { end: 2013, day: 0, start: 793 },
              { end: 2051, day: 1, start: 833 },
              { end: 2028, day: 2, start: 964 },
              { end: 2123, day: 3, start: 671 },
              { end: 2204, day: 4, start: 894 },
              { end: 2171, day: 5, start: 868 },
              { end: 2145, day: 6, start: 854 }
            ]
          }
        ],
        categories: [{ type: "Mongolian" }],
        "From the Business":
          "Qui quaerat atque voluptas et. Totam in maiores assumenda sapiente quisquam incidunt pariatur dolores tenetur. Sit qui alias cumque consequatur illum. Aut unde aut nobis maiores voluptatem voluptatem. Voluptate hic sequi ab cum adipisci quia perspiciatis delectus eligendi. Dolorum adipisci omnis officia assumenda quibusdam enim ullam magnam autem.",
        more_info: {
          "Has Soy-free Options": true,
          "Liked by Vegetarians": true,
          "Takes Reservations": true,
          Delivery: true,
          "Take-out": true,
          "Accepts Credit Cards": false,
          "Accepts Apple Pay": false,
          "Accepts Google Pay": false,
          "Good For": "dinner",
          "Parking Street": true,
          "Bike Parking": true,
          "Wheelchair Accessible": false,
          "Good for Kids": false,
          "Good for Groups": true,
          "Attire Casual": "fancy",
          "Noise Level Average": "average",
          Alcohol: false,
          "Outdoor Seating": true,
          "Wi-Fi": false,
          "Has TV": true,
          "Waiter Service": true,
          Caters: true,
          "Gender Neutral Restroom": false
        }
      }
    };
  }

  // componentDidMount() {
  //   const context = this;
  //   axios.get("/restaurantInfo/3").then(function(response) {
  //     context.setState({
  //       restaurant: response.data
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <Hours
          hours={this.state.restaurant ? this.state.restaurant.hours[0] : null}
        />
      </div>
    );
  }
}

ReactDOM.render(<RestaurantInfo />, document.getElementById("app"));

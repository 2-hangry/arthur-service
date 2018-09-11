import React from 'react';

class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null
    };
  }


  componentDidMount() {

  }
  render() {
    return (
      <div>This is an initial Component</div>
    );
  }
} 

export default RestaurantInfo;
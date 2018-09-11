import React from "react";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: this.props.day
    };
  }

  render() {
    console.log(this.props, " the props passed down;");
    return (
      <tr>
        <th>Mon</th>
        <td>What</td>
        <td>in</td>
      </tr>
    );
  }
}

export default Day;

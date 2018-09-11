import React from "react";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: null,
      hours: "",
      openNow: false
    };
  }


  componentDidMount() {
    const week = {
      0: "Mon",
      1: "Tues",
      2: "Wed",
      3: "Thurs",
      4: "Fri",
      5: "Sat",
      6: "Sun"
    };
    let day = week[this.props.day.day];
    let start = (Math.floor(this.props.day.start / 100) * 100).toString();
    let end = (Math.floor(this.props.day.end / 100) * 100).toString();
    start = moment(start.slice(0, -2) + ":" + start.slice(-2), 'HH:mm a').format('hh:mm a');
    end = moment(end.slice(0, -2) + ":" + end.slice(-2), 'HH:mm a').format('hh:mm a');
    this.setState({
      day: day,
      hours: start + ' - ' + end
    });
  }

  render() {

    return (
      <tr>
        <th>{this.state.day}</th>
        <td>{this.state.hours}</td>
      </tr>
    );
  }
}

export default Day;

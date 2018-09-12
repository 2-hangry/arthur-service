import React from "react";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

const fontStyle = {
  fontSize: 14+'px',
  fontFamily: 'sans-serif',
  textAlign: 'left'
};

class DailyHours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: null,
      hours: null
    };
  }


  componentDidUpdate(prevProps) {
    const week = {
      0: "Mon",
      1: "Tue",
      2: "Wed",
      3: "Thu",
      4: "Fri",
      5: "Sat",
      6: "Sun"
    };
    let day = week[this.props.day.day];
    const start = moment((Math.floor(this.props.day.start)/100), 'HH').format('hh:mm a');
    const end = moment((Math.floor(this.props.day.end)/100), 'HH').format('hh:mm a');
    let hours = start + ' - ' + end;
    if (hours !== this.state.hours) {
      this.setState({
        day: day,
        hours: hours
      });
    }
  }

  componentWillMount() {
    const week = {
      0: "Mon",
      1: "Tue",
      2: "Wed",
      3: "Thu",
      4: "Fri",
      5: "Sat",
      6: "Sun"
    };
    let day = week[this.props.day.day];
    const start = moment((Math.floor(this.props.day.start)/100), 'HH').format('hh:mm a');
    const end = moment((Math.floor(this.props.day.end)/100), 'HH').format('hh:mm a');
    let hours = start + ' - ' + end;
    this.setState({
      day: day,
      hours: hours
    });

  }


  render() {
    return (
      <tr style={fontStyle}>
        <th>{this.state.day}</th>
        <td>{this.state.hours}</td>
      </tr>
    );
  }
}

export default DailyHours;

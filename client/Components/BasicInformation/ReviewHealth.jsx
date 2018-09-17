import React from "react";
import Modal from "react-modal";
import styles from '../../styles.css.js';
import styled from 'styled-components';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

const Title = styled.p`
  font-weight: bold;
  color: red;
  font-size: 25;
  text-align: left;
  font-family: sans-serif;
`

const Button = styled.button`
  background-color: red;
  font-weight: bold;
  margin-top: 4px;
  color: white;
  text-align: center;
  -webkit-border-radius: 30;
  -moz-border-radius: 30;
  border-radius: 4px;
`

class ReviewHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      ratingsComparator: {
        1: "Avoid This Place Like The Plague",
        2: "It's YOUR Stomach I Guess",
        3: "Take A Chance, Columbus Did!",
        4: "Go!! Don't Forget To Instagram Like The Rest Of The Sheeple",
        5: "I Bet This Place Paid For Elites To Rate Them!"
      },
      rating: Math.floor(this.props.rating),
      linkHover: false
    };
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
      rating: Math.floor(this.props.rating)
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  setLinkHover (bool) {
    this.setState(prevState => ({
      linkHover: !prevState.linkHover
    }));

  }
  render() {
    return (
      <div>
        <a 
        style={this.state.linkHover ? Object.assign({textDecorationLine: 'underline'}, styles.reviewLinkStyling) : styles.reviewLinkStyling}
        onMouseEnter={() => this.setLinkHover(true)}
        onMouseLeave={() => this.setLinkHover(false)} 
        onClick={this.handleOpenModal.bind(this)}>Review Health
        </a>
        <Modal
          style={styles.modalStyling}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal.bind(this)}
        >
          <button onClick={this.handleCloseModal.bind(this)}>Close</button>
          <Title>Restauant Review Health</Title>
          <div style={styles.fontBolded}>
            <p>{this.state.ratingsComparator[this.state.rating]}</p>
            <p>{this.props.rating}</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ReviewHealth;

import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import styles from '../../styles.css.js';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#restaurantInfoApp');

// --------------Modal Styling----------------------------------------------------------------------
const Title = styled.p`
  font-weight: bold;
  color: red;
  font-size: 25;
  text-align: left;
  font-family: sans-serif;
`;

const Button = styled.button`
  background-color: red;
  font-weight: bold;
  margin-top: 4px;
  color: white;
  text-align: center;
  -webkit-border-radius: 30;
  -moz-border-radius: 30;
  border-radius: 4px;
`;
// --------------Modal Styling----------------------------------------------------------------------

class ReviewHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      ratingsComparator: {
        1: 'Avoid This Place Like The Plague',
        2: "It's YOUR Stomach I Guess",
        3: 'Take A Chance, Columbus Did!',
        4: "Go!! Don't Forget To Instagram Like The Rest Of The Sheeple",
        5: 'I Bet This Place Paid For Elites To Rate Them!',
      },
      rating: Math.floor(this.props.rating),
      linkHover: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  setLinkHover() {
    this.setState(prevState => ({
      linkHover: !prevState.linkHover,
    }));
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
      rating: Math.floor(this.props.rating),
    });
  }

  render() {
    return (
      <div>
        <Button
          style={
            this.state.linkHover
              ? Object.assign({ textDecorationLine: 'underline' }, styles.reviewLinkStyling)
              : styles.reviewLinkStyling
          }
          onMouseEnter={() => this.setLinkHover(true)}
          onMouseLeave={() => this.setLinkHover(false)}
          onClick={this.handleOpenModal}
        >
          Review Health
        </Button>
        <Modal
          style={styles.modalStyling}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
        >
          <Title>Restauant Review Health</Title>
          <hr />
          <div style={styles.fontBolded}>
            <p>{this.state.ratingsComparator[this.state.rating]}</p>
            <p>{this.props.rating}</p>
          </div>
          <Button onClick={this.handleCloseModal}>Close</Button>
        </Modal>
      </div>
    );
  }
}

export default ReviewHealth;

import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

class ReviewHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, 
      ratingsComparator: {
        1: 'Avoid This Place Like The Plague',
        2: 'It\'s Your Stomach I Guess',
        3: 'Take A Chance, Columbus Did!',
        4: 'Go!! Don\'t Forget To Instagram Like The Rest Of The Sheeple',
        5: 'I Bet This Place Paid For Elites To Rate Them!'
      }
    };
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal.bind(this)}>ReviewRating</button>
        <Modal isOpen={this.state.showModal}>
          <p>{this.props.rating}</p>
          <button onClick={this.handleCloseModal.bind(this)}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default ReviewHealth;

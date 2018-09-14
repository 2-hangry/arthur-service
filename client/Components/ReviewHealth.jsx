import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

const textStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

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
      rating: Math.floor(this.props.rating)
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

  render() {
    return (
      <div>
        <a onClick={this.handleOpenModal.bind(this)}>Review Health</a>
        <Modal
          style={textStyle}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal.bind(this)}
        >
          <button onClick={this.handleCloseModal.bind(this)}>Close</button>
          <p>{this.state.ratingsComparator[this.state.rating]}</p>
          <p>{this.props.rating}</p>
        </Modal>
      </div>
    );
  }
}

export default ReviewHealth;

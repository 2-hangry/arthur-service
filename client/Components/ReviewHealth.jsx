import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#app");

class ReviewHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
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
        <button onClick={ this.handleOpenModal.bind(this) }>Trigger Modal</button>
        <Modal
          isOpen={ this.state.showModal }
        >
          <button onClick={ this.handleCloseModal.bind(this) }>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default ReviewHealth;
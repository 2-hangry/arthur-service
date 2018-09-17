import React from "react";
import Modal from "react-modal";
import styles from '../../styles.css.js';
import styled from 'styled-components';

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

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app');

class BusinessModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      linkHover: false
    };
  }

  handleOpenModal() {
    this.setState({
      showModal: true
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
          onClick={this.handleOpenModal.bind(this)}>Learn more about {this.props.restaurantName}
        </a>

        <Modal
          style={styles.modalStyling}
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal.bind(this)}
        >
        <Title>From the business</Title>
        <hr></hr>
        <div>
        {this.props.restaurantInfo}
        </div>
        <Button onClick={this.handleCloseModal.bind(this)}>Close</Button>
        </Modal>
      </div>
    );
  }
}

export default BusinessModal;
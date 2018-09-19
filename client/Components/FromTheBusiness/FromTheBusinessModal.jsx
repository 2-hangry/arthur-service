import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import styles from '../../styles.css';

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
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 4px;
`;
const Flag = styled.img`
  float: right;
  height: 14;
  width: 14;
  padding: 5;
  border: 1px solid grey;
  border-radius: 3px;

  &:hover {
    background: #555;
    border-style: inset;
  }
`;

const Link = styled.p`
  color: #2e6d97;
  max-width: 250px;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    text-decoration: underline;
  }
`;

// --------------Modal Styling----------------------------------------------------------------------

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#restaurantInfoApp');

class BusinessModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({
      showModal: true,
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const { restaurantInfo, restaurantName } = this.props;
    return (
      <div>
        <Link onClick={this.handleOpenModal}>
          Learn more about
          {'  '}
          {restaurantName}
        </Link>

        <Modal
          style={styles.modalStyling}
          isOpen={showModal}
          onRequestClose={this.handleCloseModal}
        >
          <Title>From the business</Title>
          <hr />
          <div>{restaurantInfo}</div>
          <Button onClick={this.handleCloseModal}>Close</Button>
          <Flag src="https://png.icons8.com/ios/50/666666/flag-filled.png" />
        </Modal>
      </div>
    );
  }
}

export default BusinessModal;

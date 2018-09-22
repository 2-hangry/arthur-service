import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactModal from 'react-modal';
import ReviewModal from '../../BasicInformation/ReviewHealth';
import BusinessInfoModal from '../../FromTheBusiness/FromTheBusinessModal';

Enzyme.configure({ adapter: new Adapter() });

describe('Restaurant Information Modals', () => {
  it('renders <ReviewModal>', () => {
    const wrapper = shallow(<ReviewModal />);
    expect(wrapper.find(ReactModal).length).toEqual(1);
  });

  it('renders <BusinessInfoModal>', () => {
    const wrapper = shallow(<BusinessInfoModal />);
    expect(wrapper.find(ReactModal).length).toEqual(1);
  });
});

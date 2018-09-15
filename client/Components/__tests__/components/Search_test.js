import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../Search.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('restaurant Suite', function() {
  it('should render without crashing', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.exists()).toEqual(true);
  });
});
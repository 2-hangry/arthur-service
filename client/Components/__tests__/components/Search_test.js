import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../../Search.jsx';

Enzyme.configure({ adapter: new Adapter() });
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Search />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Hours from '../../HoursOfOperation/Hours.jsx';

Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const props = {
    hours: {
      open: [
        {
          day: 0,
          end: 2014,
          start: 897,
        },
        {
          day: 1,
          end: 2100,
          start: 700,
        },
        {
          day: 2,
          end: 2300,
          start: 700,
        },
        {
          day: 3,
          end: 1600,
          start: 300,
        },
        {
          day: 4,
          end: 2100,
          start: 700,
        },
        {
          day: 5,
          end: 2300,
          start: 700,
        },
        {
          day: 6,
          end: 1600,
          start: 300,
        },
      ],
    },
  };

  const tree = renderer.create(<Hours {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

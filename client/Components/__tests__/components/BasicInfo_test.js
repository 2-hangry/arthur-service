import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BasicInfo from "../../BasicInformation/BasicInfo.jsx";

Enzyme.configure({ adapter: new Adapter() });
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const props = {
    businessHours: {
      open: [
        {
          day: 0,
          end: 2014,
          start: 897
        },
        {
          day: 1,
          end: 2100,
          start: 700
        },
        {
          day: 2,
          end: 2300,
          start: 700
        },
        {
          day: 3,
          end: 1600,
          start: 300
        },
        {
          day: 4,
          end: 2100,
          start: 700
        },
        {
          day: 5,
          end: 2300,
          start: 700
        },
        {
          day: 6,
          end: 1600,
          start: 300
        }
      ]
    },
    price: "$$$$",
    rating: 3.1
  };
  const tree = renderer.create(<BasicInfo {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});




import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoreInfo from "../../MoreBusiessInformation/MoreInfo.jsx";

Enzyme.configure({ adapter: new Adapter() });
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const props = {moreInfo: {more_info: {'Accepts Apple Pay':
        false,
        'Accepts Credit Cards':
        false,
        'Accepts Google Pay':
        false,
        'Alcohol':
        true,
        'Attire Casual':
        "sloppy",
        'Bike Parking':
        false,
        'Caters':
        true,
        'Delivery':
        true,
        'Gender Neutral Restroom':
        false,
        'Good For':
        "breakfast",
        'Good for Groups':
        true,
        'Good for Kids':
        false,
        'Has Soy-free Options':
        true,
        'Has TV':
        true,
        'Liked by Vegetarians':
        false,
        'Noise Level Average':
        "loud",
        'Outdoor Seating':
        true,
        'Parking Street':
        false,
        'Take-out':
        false,
        'Takes Reservations':
        false,
        'Waiter Service':
        false,
        'Wheelchair Accessible':
        false,
        'Wi-Fi':
        false
      
    }}}
    

  const tree = renderer.create(<MoreInfo {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
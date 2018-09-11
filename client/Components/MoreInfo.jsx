import React from "react";
import InformationString from "./InformationString.jsx";

const MoreInfo = props => {
  const infoArr = Object.entries(props.moreInfo.more_info);

  return (
    <div>
      <h3>More business info</h3>
      <div>
        {infoArr.map(info => {
          return <InformationString info={info} />;
        })}
      </div>
    </div>
  );
};

export default MoreInfo;

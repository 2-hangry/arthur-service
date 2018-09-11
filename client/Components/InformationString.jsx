import React from "react";

const InformationString = props => {
  return (
    <div>
      <span>{props.info[0]}</span>
      <span>{props.info[1].toString()}</span>
    </div>
  );
};

export default InformationString;

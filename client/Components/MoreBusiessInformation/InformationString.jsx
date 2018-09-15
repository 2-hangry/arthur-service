import React from "react";

const fontBolded = {
  fontWeight: "bold"
};
const genStyle = {
  fontSize: 13
};

const InformationString = props => {
  if (typeof props.info[1] === "boolean") {
    return (
      <div style={genStyle}>
        <br />
        <span>{props.info[0]}</span>
        {props.info[1] ? (
          <span style={fontBolded}> Yes</span>
        ) : (
          <span style={fontBolded}> No</span>
        )}
      </div>
    );
  } else {
    return (
      <div style={genStyle}>
        <br />
        <span>{props.info[0]}</span>
        <span style={fontBolded}> {props.info[1]}</span>
      </div>
    );
  }
};

export default InformationString;

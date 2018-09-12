import React from "react";

const fontStyle = {
  fontWeight: "bold"
};
const genStyle = {
  fontFamily: "sans-serif",
  fontSize: 13 + "px"
};

const InformationString = props => {
  if (typeof props.info[1] === "boolean") {
    return (
      <div style={genStyle}>
        <br />
        <span>{props.info[0]}</span>
        {props.info[1] ? (
          <span style={fontStyle}> Yes</span>
        ) : (
          <span style={fontStyle}> No</span>
        )}
      </div>
    );
  } else {
    return (
      <div style={genStyle}>
        <br />
        <span>{props.info[0]}</span>
        <span style={fontStyle}> {props.info[1]}</span>
      </div>
    );
  }
};

export default InformationString;

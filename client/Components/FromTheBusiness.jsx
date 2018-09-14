import React from "react";


const FromTheBusiness = props => {
  return (
    <div>
      <p style={{fontWeight: 'bold', color: 'red'}}>From The Business</p>
      <p style={{maxWidth: 175}}>{props.fromBusiness}</p>
    </div>
  );
};


export default FromTheBusiness;
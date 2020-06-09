import React from 'react';

const AddedFeature = props => {

  const clickHandler = (event) => {
    event.preventDefault();
    props.removeFeature(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={clickHandler}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

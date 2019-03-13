import React from 'react';
import PropTypes from 'prop-types';

function Taco({ taco }) {
  const { name, rating, price, vibes }

  return (
    <div>
      <label>{name}</label>
      <label>{rating}</label>
      <label>{price}</label>
      <label>{vibes}</label>
    </div>
  );
}

Taco.propTypes = {
  taco: PropTypes.object.isRequired
};

export default Taco;

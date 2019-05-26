import React from 'react';
import PropTypes from 'prop-types';

import css from '../css/ReferenceRow.css';

const renderValue = data => {
  if (Array.isArray(data)) {
    if (!data[0]) {
      return `< ${data[1]}`;
    }
    if (!data[1]) {
      return `\u2265 ${data[0]}`;
    }
    return data.map(x => x.toLocaleString('sl', { minimumFractionDigits: 2 })).join(' - ');
  }
  /* if it's not an array, then it's a string */
  return data;
};

const ReferenceRow = ({ data, calculatedItem }) => {
  const { color, title, value } = data;
  if (!value) {
    return <css.Pad>Please input Weight and Height</css.Pad>;
  }
  return (
    <css.Reference active={calculatedItem && calculatedItem.title === title}>
      <css.ColorSquare bg={color} />
      <css.Title>{title}</css.Title>
      <css.Value>{renderValue(value)}</css.Value>
    </css.Reference>
  );
};

ReferenceRow.propTypes = {
  data: PropTypes.object.isRequired,
  calculatedItem: PropTypes.object.isRequired,
};

export default ReferenceRow;

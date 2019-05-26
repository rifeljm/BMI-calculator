import { hot } from 'react-hot-loader';
import React from 'react';

import { Reference, ColorSquare, Title, Value, Pad } from '../styles/ReferenceRowStyles.js';

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
  /* if it's not and array, then it's a string */
  return data;
};

const ReferenceRow = ({ data, calculatedItem }) => {
  const { color, title, value } = data;
  let referenceStyle = calculatedItem && calculatedItem.title === title ? { backgroundColor: '#F0F0F0' } : {};
  if (!value) {
    return <Pad>Please input Weight and Height</Pad>;
  }
  const colorSquareStyle = { backgroundColor: color };
  return (
    <Reference style={referenceStyle}>
      <ColorSquare style={colorSquareStyle} />
      <Title>{title}</Title>
      <Value>{renderValue(value)}</Value>
    </Reference>
  );
};

export default hot(module)(ReferenceRow);

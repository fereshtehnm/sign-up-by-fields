import React from 'react';

const CheckButton = ({ text, forId, isSelected }) => {
  return (
    <label
      className={`p-2 rounded-md text-xl ${
        isSelected ? 'border-darkGreen bg-lightGreen border-solid border-2' : 'bg-lightGray'
      }`}
      htmlFor={forId}
    >
      {text}
    </label>
  );
};

export default CheckButton;

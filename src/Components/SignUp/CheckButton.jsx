import React from 'react';

const CheckButton = ({ text, forId, isSelected }) => {
  return (
    <label
      className={`p-3 rounded-md text-[16px] font-light	 ${
        isSelected ? 'border-darkGreen bg-lightGreen border-solid border-[1px]' : 'bg-lightGray'
      }`}
      htmlFor={forId}
    >
      {text}
    </label>
  );
};

export default CheckButton;

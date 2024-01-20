import React from 'react';

const RadioButton = ({ text, forId, selectedOption }) => {
    return (
        <label className={`p-3 rounded-md text-[16px] font-light
            ${selectedOption === forId ? ' border-darkGreen bg-lightGreen border-solid border-2' : 'bg-lightGray'}`}
            for={forId}
        >
            {text}
        </label>
    )
}

export default RadioButton;
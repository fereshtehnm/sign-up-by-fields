import React, { useState } from 'react';
import CheckButton from './CheckButton';

const MultiClickGroup = ({ inputList, line }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (key) => {
        const isSelected = selectedOptions.includes(key);

        if (isSelected) {
            setSelectedOptions(selectedOptions.filter((option) => option !== key));
        } else {
            setSelectedOptions([...selectedOptions, key]);
        }
    };

    return (
        <div className={`py-5 flex flex-wrap max-w-[24rem] sm:max-w-[35rem]`}>
            {Object.entries(inputList).map(([key, value]) => (
                <div key={key} className= 'p-1 pl-1 pb-6'>
                    <CheckButton text={value} forId={key} isSelected={selectedOptions.includes(key)} />
                    <div>
                        <input
                            id={key}
                            type="checkbox"
                            checked={selectedOptions.includes(key)}
                            onChange={() => handleOptionChange(key)}
                            className='hidden'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MultiClickGroup;

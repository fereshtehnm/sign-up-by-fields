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
        <div className={`py-5 flex ${line === 'multiple' ? 'flex-wrap' : 'justify-between'} max-w-[20rem]`}>
            {Object.entries(inputList).map(([key, value]) => (
                <div key={key} className={`${line === 'multiple' && 'p-1 pl-4 pb-7'}`}>
                    <CheckButton text={value} forId={key} isSelected={selectedOptions.includes(key)} />
                    <div className="flex items-center">
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

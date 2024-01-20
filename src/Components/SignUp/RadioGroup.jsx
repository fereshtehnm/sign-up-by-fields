import React, { useState } from 'react';
import RadioButton from './RadioButton';


const RadioGroup = ({ inputList, line }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className={`py-5 flex ${line == 'multiple' ? 'flex-wrap' : ' justify-between'} max-w-[30rem]`}>
            {Object.entries(inputList).map(([key, value]) => (
                <div key={key} className={`${line == 'multiple' && 'p-1 pl-4 pb-7'}`}>
                    <RadioButton text={value} forId={key} selectedOption={selectedOption} />
                    <input
                        id={key}
                        type="radio"
                        value={value}
                        checked={selectedOption === key}
                        onChange={() => handleOptionChange(key)}
                        className='hidden'
                    />
                </div>
            ))}
        </div>
    );
};

export default RadioGroup;

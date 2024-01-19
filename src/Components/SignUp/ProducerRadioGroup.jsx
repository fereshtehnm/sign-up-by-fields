import React, { useState } from 'react';
import RadioButton from './RadioButton';


const ProducerRadioGroup = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    return (
        <div className=' py-3 flex flex-wrap space-x-4 producerGroup'>
            <div>
                <RadioButton text='مبل' forId='item1' selectedOption={selectedOption} />
                <input
                    id='item1'
                    type="radio"
                    value="مبل"
                    checked={selectedOption === 'item1'}
                    onChange={() => handleOptionChange('item1')}
                    className='hidden'
                />
            </div>

            <div>
                <RadioButton text='سرویس خواب' forId='item2' selectedOption={selectedOption} />
                <input
                    id='item2'
                    type="radio"
                    value="سرویس خواب"
                    checked={selectedOption === 'item2'}
                    onChange={() => handleOptionChange('item2')}
                    className='hidden'
                />
            </div>

            <div>
                <RadioButton text='مبل اداری' forId='item3' selectedOption={selectedOption} />
                <input
                    id='item3'
                    type="radio"
                    value="مبل اداری"
                    checked={selectedOption === 'item3'}
                    onChange={() => handleOptionChange('item3')}
                    className='hidden'
                />
            </div>

            <div>
                <RadioButton text='سایر' forId='item4' selectedOption={selectedOption} />
                <input
                    id='item4'
                    type="radio"
                    value="سایر"
                    checked={selectedOption === 'item4'}
                    onChange={() => handleOptionChange('item4')}
                    className='hidden'
                />
            </div>


        </div>
    );
};

export default ProducerRadioGroup;

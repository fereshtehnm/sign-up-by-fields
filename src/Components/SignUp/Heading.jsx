import React from 'react';
import LightTooltip from './LightToolTip';


const Heading = () => {
    return (
        <div className='pb-12'>
            <div className='py-4 px-1'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 16H27" stroke="#272B28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 7L27 16L18 25" stroke="#272B28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div>
                <h2 className='text-black text-[20px] inline-flex align-middle'>
                    زمینه فعالیت اختصاصی
                    <LightTooltip disableFocusListener title="میتوانید یک یا چند گزینه انتخاب نمایید" placement="bottom-end" arrow enterTouchDelay={0}
                     componentsProps={{
                        tooltip: {
                          sx: {
                            '& .MuiTooltip-arrow': {
                              color: '#D2EAD8',
                            },
                          },
                        },
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='pt-1'>
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#5E9A6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.25 11.25H12V16.5H12.75" stroke="#5E9A6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.8125 9C12.4338 9 12.9375 8.49632 12.9375 7.875C12.9375 7.25368 12.4338 6.75 11.8125 6.75C11.1912 6.75 10.6875 7.25368 10.6875 7.875C10.6875 8.49632 11.1912 9 11.8125 9Z" fill="#5E9A6C" />
                        </svg>
                    </LightTooltip>
                </h2>
            </div>
        </div>
    )
}

export default Heading;
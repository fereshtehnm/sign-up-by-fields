import React from 'react';

function Footer() {
    return (
        <div>
            <div>
                <button class="bg-darkGreen hover:bg-white text-white hover:text-darkGreen hover:border text-center	text-xl py-2 px-4 rounded-md w-full">
                    ثبت نام
                </button>
            </div>
            <p className='text-sm'>با ثبت نام در اپلیکیشن ما <a className='text-darkGreen'>قوانین و شرایط</a>  ما رو می‌پذیرید. 
            </p>
        </div>
    )
}

export default Footer;
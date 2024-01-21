import React from 'react';

function Footer() {
    return (
        <footer className='w-full h-32 px-3 pb-3 flex flex-col justify-center items-center fixed bottom-0 left-0 bg-white'>
            <button className="bg-darkGreen hover:bg-white text-white hover:text-darkGreen hover:border text-center	text-[16px] p-4 m-3 rounded-md w-full">
                ثبت نام
            </button>
            <p className='text-[12px]'>با ثبت نام در اپلیکیشن ما <button href='#' className='text-darkGreen underline'>قوانین و شرایط</button>  ما رو می‌پذیرید.
            </p>
        </footer>
    )
}

export default Footer;
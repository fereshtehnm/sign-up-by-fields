import React from 'react';
import Heading from './Heading';
import ProductProducer from './ProductProducer';
import MajorBuyer from './MajorBuyer';
import Services from './Services';
import Footer from './Footer';

const SignUp = () => {
  return (
    <div className=' w-full'>
      <main className='min-h-screen pb-20'>
        <Heading />
        <ProductProducer />
        <MajorBuyer />
        <Services />
      </main>
      <Footer/>
    </div>
  )
}

export default SignUp;
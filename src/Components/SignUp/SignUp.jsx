import React from 'react';
import Heading from './Heading';
import ProductProducer from './ProductProducer';
import MajorBuyer from './MajorBuyer';
import Services from './Services';
import Footer from './Footer';

const SignUp = () => {
  return (
    <div className=' min-h-screen '>
      <main>
        <Heading />
        <ProductProducer />
        <MajorBuyer />
        <Services />
      </main>
      <Footer/>
    </div>
  )
}

export default SignUp
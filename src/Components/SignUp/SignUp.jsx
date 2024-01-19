import React from 'react';
import Heading from './Heading';
import ProductProducer from './ProductProducer';
import MajorBuyer from './MajorBuyer';
import Services from './Services';
import SubmitButton from './SubmitButton';

const SignUp = () => {
  return (
    <div>
        <Heading />
        <ProductProducer />
        <MajorBuyer />
        <Services />
        <SubmitButton />
    </div>
  )
}

export default SignUp
import React from 'react';
import MultiClickGroup from './MultiClickGroup';

const ProductProducer = () => {

  const producersList = {
    product1: "مبل",
    product2: "سرویس خواب",
    product3: "مبل اداری",
    product4: "سایر",
  }

  return (
    <div>
      <h3 className='text-black text-[16px] inline-flex align-middle	'>
        تولید کننده محصول
      </h3>
      <MultiClickGroup inputList={producersList} line='single' />
    </div>
  )
}

export default ProductProducer;
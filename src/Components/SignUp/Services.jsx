import React from 'react';
import MultiClickGroup from './MultiClickGroup';

const Services = () => {

  const buyersList = {
    service1: "فروشنده مبل",
    service2: "مشاور مبل",
    service3: "الیاف مبل",
    service4: "سایر",
  }

  return (
    <div>
      <h3 className='text-black text-[16px] inline-flex align-middle'>
        خدمات
      </h3>
      <MultiClickGroup inputList={buyersList} line='multiple' />
    </div>
  )
}

export default Services;
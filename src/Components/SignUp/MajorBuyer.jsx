import React from 'react';
import RadioGroup from './RadioGroup';


const MajorBuyer = () => {

  const buyersList = {
    buyer1: "خریدار عمده مبل",
    buyer2: "خریدار فروشگاه مبل",
    buyer3: "صادر کننده",
    buyer4: "سایر",
  }

  return (
    <div>
      <h3 className='text-black text-xl inline-flex align-middle	'>
        خریدار عمده
      </h3>
      <RadioGroup inputList={buyersList} line='multiple' />
    </div>
  )
}

export default MajorBuyer;
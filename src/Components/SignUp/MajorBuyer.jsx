import React from 'react';
import MultiClickGroup from './MultiClickGroup';

const MajorBuyer = () => {

  const buyersList = {
    buyer1: "خریدار عمده مبل",
    buyer2: "خریدار فروشگاه مبل",
    buyer3: "صادر کننده",
    buyer4: "سایر",
  }

  return (
    <div>
      <h3 className='text-black text-[16px] inline-flex align-middle	'>
        خریدار عمده
      </h3>
      <MultiClickGroup inputList={buyersList} line='multiple' />
    </div>
  )
}

export default MajorBuyer;
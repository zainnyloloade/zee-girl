import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Started = () => {
  return ( 
    <div>
    <div className='pl-12 mt-10 flex flex-col lg:flex-row gap-8'>
  <div className='flex-1'>
    <img src='/first-sales-1.svg' alt='Merchant 1' /> 
    <h1 className='text-3xl font-bold ml-10'>Become A Merchant</h1>
    <h2>Grow your business and increase profit by creating an online ordering page</h2>
    <p className='text-green-500 pl-3 font-semibold'>Get Started
      <FontAwesomeIcon icon={faArrowRight} className='pl-2' />
    </p>
  </div>

  <div className='flex-1'>
    <img src='/first-sales-2.svg' alt='Merchant 2' /> 
    <h1 className='text-3xl font-bold'>Become A Merchant</h1>
    <h2>Grow your business and increase profit by creating an online ordering page</h2>
    <p className='text-green-500 font-semibold'>Get Started 
      <FontAwesomeIcon icon={faArrowRight} className='pl-2' />
    </p>
  </div>

  <div className='flex-1'>
    <img src='/first-sales-3.svg' alt='Rider' /> 
    <h1 className='text-3xl font-bold'>Become A Rider</h1>
    <h2>Drive, deliver and earn. Make more money when you become a rider on Heyfood</h2>
    <p className='text-green-500 font-semibold'>Get Started 
      <FontAwesomeIcon icon={faArrowRight} className='pl-2' />
    </p>
  </div>
</div>

    </div>
  )
}

export default Started

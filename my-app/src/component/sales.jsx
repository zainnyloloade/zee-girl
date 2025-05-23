import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Sales = () => {
  return (
    <div>
      <div>
<div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 mt-10 px-4">
  
  <div className="lg:w-1/2 text-center lg:text-left">
    <h1 className="text-7xl lg:text-5xl font-bold mb-3">
      A Variety of Stores to choose from
    </h1>
    <p className="text-base lg:text-2xl mb-6">
      Order food from the best restaurants, local favorites, and online vendors using the app or web.
    </p>
    <a
      href="https://www.heyfood.africa/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="text-white bg-black rounded-3xl h-12 w-45 pl-2 pr-7 text-lg flex-col-reverse">
        Start Ordering
        <FontAwesomeIcon icon={faArrowRight} className='pl-2' />
      </button>
    </a>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src="/second-sales-1.png"
      alt="Stores"
      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl object-cover"
    />
  </div>
</div>
     <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-10 px-4">
  {/* Image Section */}
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src="/second-sales-2.png"
      alt="Grow with Heyfood"
      className="w-full h-64 sm:h-72 lg:h-[500px] rounded-xl object-cover"
    />
  </div>

  {/* Text & Features Section */}
  <div className="w-full lg:w-1/2">
    <h1 className="text-3xl lg:text-4xl font-bold mb-4">Grow With Heyfood</h1>
    <p className="text-base lg:text-lg mb-6">
      Expand your business and make money with features that make managing
      and processing orders easier.
    </p>

   {/* Features Section - Always in a row */}
{/* Features Section - Always in a row, wraps when needed, no horizontal scroll */}
<div className="flex flex-row flex-wrap justify-center gap-5 w-full mb-6">
  <div className="w-[150px]">
    <img src="/second-sales-sub-1.svg" alt="Order Management" className="mb-2" />
    <p className="text-xl font-bold">Order Management</p>
    <h3 className="text-sm">
      Receive and manage orders directly from your dashboard.
    </h3>
  </div>

  <div className="w-[150px]">
    <img src="/second-sales-sub-2.svg" alt="Automatic Payout" className="mb-2" />
    <p className="text-xl font-bold">Automatic Payout</p>
    <h3 className="text-sm">
      Get paid automatically to your bank account.
    </h3>
  </div>

  <div className="w-[150px]">
    <img src="/second-sales-sub-3.svg" alt="Dine-In Orders" className="mb-2" />
    <p className="text-xl font-bold">Dine-In Orders</p>
    <h3 className="text-sm">
      Better in-store dining service with QR Codes.
    </h3>
  </div>
</div>

{/* CTA Button */}
<a
  href="https://dashboard.heyfood.africa/signup"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="text-white bg-black rounded-3xl px-6 py-3 text-base">
    Sign Up Your Store
    <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
  </button>
</a>

  </div>
</div>
      </div>
    </div>
  );
};

export default Sales;

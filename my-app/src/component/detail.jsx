import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Detail = () => {
  return (
    <div className='pt-24 px-6 sm:px-14 bg-white'>
      {/* Logo */}
      <div className='mb-4'>
        <img src='/heylogo.svg' alt='HeyFood Logo' className='h-12 sm:h-16' />
      </div>

      {/* Main Text */}
      <p className='mt-4 text-3xl sm:text-5xl font-bold leading-tight'>
        Your food <span className='text-green-700'>delivered</span> within minutes.
      </p>

      {/* Store Buttons */}
      <div className='mt-6 flex flex-col sm:flex-row gap-4'>
        <a href="https://play.google.com/store/apps/details?id=xyz.heypay.heyfood" target="_blank" rel="noopener noreferrer">
          <button className='flex items-center gap-2 text-white bg-black rounded-3xl h-14 w-44 px-4'>
            <FontAwesomeIcon icon={faApple} className='text-2xl' />
            App Store
          </button>
        </a>
        <a href="https://play.google.com/store/apps/details?id=xyz.heypay.heyfood" target="_blank" rel="noopener noreferrer">
          <button className='flex items-center gap-2 text-white bg-black rounded-3xl h-14 w-44 px-4'>
            <FontAwesomeIcon icon={faGooglePlay} className='text-2xl' />
            Play Store
          </button>
        </a>
      </div>

      {/* QR Code */}
      <div className='flex justify-end mt-6'>
        <img src='download-qr.svg' alt='QR Code' className='h-28' />
      </div>

      {/* Footer Links */}
      <h3 className='text-green-600 text-right text-sm mt-2'>
        Terms of Service • Privacy Policy
      </h3>
    </div>
  );
};

export default Detail;

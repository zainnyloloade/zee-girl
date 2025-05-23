import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Store = () => {
  return (
    <div className="flex flex-row items-center gap-4 pl-9 flex-wrap mt-5">
      <a
        href="https://play.google.com/store/apps/details?id=xyz.heypay.heyfood"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center pl-5 gap-2 text-amber-50 bg-black rounded-3xl text-center h-14 w-44 px-3">
          <FontAwesomeIcon icon={faApple} className="text-3xl text-white" />
          App Store
        </button>
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=xyz.heypay.heyfood"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="flex items-center gap-2 text-amber-50 bg-black rounded-3xl h-14 w-44 px-3">
          <FontAwesomeIcon icon={faGooglePlay} className="text-3xl text-white" />
          Play Store
        </button>
      </a>
    </div>
  );
};

export default Store;

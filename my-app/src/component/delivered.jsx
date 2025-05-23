import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Delivered = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start mt-10">
      
      <div className="sm:w-1/2 w-full px-2">
        <p className="text-black font-bold text-7xl sm:text-8xl font-sans mb-4 ">
          Your food <span className="text-green-700">delivered</span> within minutes.
        </p>

       
        <div className="flex flex-row gap-2 mb-4 flex-wrap">
          <div className="bg-gray-200 h-10 flex-1 rounded-3xl flex items-center ps-3 min-w-[200px]">
          <FontAwesomeIcon icon={faLocationDot} className="text-gray-500 pl-2 pr-1" />
          <input
           type="text"
              placeholder="Enter your delivery address"
             className="outline-0 bg-transparent w-full"
  />
          </div>
          <div className="bg-black h-10 flex-1 rounded-3xl flex items-center ps-3 text-white min-w-[200px]">
            <input
              type="text"
              placeholder="Find Restaurants"
              className="outline-0 bg-transparent w-full"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-1/2 w-full px-4 flex flex-col items-center">
        {/* Image: Square on large screens, rectangle on small */}
        <div className="w-full aspect-[19/10] sm:aspect-square overflow-hidden mb-4">
          <img src="/heroside.svg" className="w-full h-full object-cover rounded-xl" />
        </div>

        {/* App Store Buttons (One time only) */}
        <div className="flex flex-row justify-center gap-2">
          <a
            href="https://play.google.com/store/apps/details?id=xyz.heypay.heyfood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 text-amber-50 bg-black rounded-3xl h-12 w-40 px-3">
              <FontAwesomeIcon icon={faApple} className="text-3xl text-white" />
              App Store
            </button>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=xyz.heypay.heyfood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 text-amber-50 bg-black rounded-3xl h-12 w-40 px-3">
              <FontAwesomeIcon icon={faGooglePlay} className="text-3xl text-white" />
              Play Store
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Delivered

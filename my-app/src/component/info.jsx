import React from 'react';

const Info = () => {
  return (
    <div className="flex justify-between px-10 py-5 gap-8 flex-wrap">
      {/* Column 1 */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">Let Us Help You</h2>
        <a href="https://heyfood.medium.com/introducing-heyfood-7037d5a5f8c7?source=user_profile---------6----------------------------" className="text-green-600">About Us</a>
        <a href="https://www.linkedin.com/company/heyfood" className="text-green-600">LinkedIn</a>
        <a href="https://heyfood.medium.com/" className="text-green-600">Blog</a>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">Get To Know Us</h2>
        <a href="mailto:heypayapp@gmail.com" className="text-green-600">Contact Us</a>
        <a href="https://www.heyfood.africa/" className="text-green-600">FAQs</a>
        <a href="https://heyfood.medium.com/" className="text-green-600">Restaurants Near Me</a>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col space-y-2">
        <h2 className="font-bold">Doing Business</h2>
        <a href="https://www.heyfood.africa/driver" className="text-green-600">Become a Driver</a>
        <a href="https://www.heyfood.africa/merchant" className="text-green-600">Become a Partner Restaurant</a>
      </div>
    </div>
  );
};

export default Info;

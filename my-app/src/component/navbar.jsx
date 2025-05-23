import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center fixed top-0 left-0 right-0 bg-white p-4 px-20 z-50'>
      <img src='/heylogo.svg' alt='Logo' />
      <div className="flex gap-4 items-center">
        <button className='font-bold text-xl'>Sign in</button>
        <button className='font-bold text-xl bg-black text-white rounded-3xl p-2 h-14 w-28'>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'

const Cities = () => {
  return (
    <div className='pl-6'>
        <h1 className='text-3xl pl-8 font-bold'>Cities near me</h1>
        <p className='underline text-2xl pl-8 font-bold text-green-500 p-2'>Ibadan</p>
        <p className='text-xl pl-8 font-bold'>Top Areas</p>
     <div className='flex-col'>
<div className="flex flex-col gap-4 pl-3">
  <div className="flex gap-10 px-4">
  
  <div className="flex flex-col space-y-2">
    <p className="text-lg font-bold text-green-400">Agbowo</p>
    <p className="text-lg font-bold text-green-400">Bodija</p>
    <p className="text-lg font-bold text-green-400">Barika</p>
    <p className="text-lg font-bold text-green-400">Ologuneru</p>
    <p className="text-lg font-bold text-green-400">University of Ibadan</p>
    <p className="text-lg font-bold text-green-400">Bodija</p>
  </div>


  <div className="flex flex-col space-y-2">
    <p className="text-lg font-bold text-green-400">Akobo</p>
    <p className="text-lg font-bold text-green-400">Mokola</p>
    <p className="text-lg font-bold text-green-400">Samonda</p>
    <p className="text-lg font-bold text-green-400">Moniya</p>
    <p className="text-lg font-bold text-green-400">UCH</p>
  </div>


  <div className="flex flex-col space-y-2">
    <p className="text-lg font-bold text-green-400">Ashi</p>
    <p className="text-lg font-bold text-green-400">Ojoo</p>
    <p className="text-lg font-bold text-green-400">Sango</p>
    <p className="text-lg font-bold text-green-400">Agodi</p>
    <p className="text-lg font-bold text-green-400">Dugbe</p>
    <p className="text-lg font-bold text-green-400">UCH</p>
  </div>

  <div className="flex flex-col space-y-2">
    <p className="text-lg font-bold text-green-400">Basorun</p>
    <p className="text-lg font-bold text-green-400">Orogun</p>
    <p className="text-lg font-bold text-green-400">Eleyele</p>
    <p className="text-lg font-bold text-green-400">Agodi-gate</p>
    <p className="text-lg font-bold text-green-400">Onireke</p>
  </div>
</div>

</div>

        </div>    
 <p className='text-xl pl-8 font-bold'> Best Restaurants In Ibadan</p>
<div className="flex gap-10 px-4">
  {/* Column 1 */}
  <div className="flex flex-col space-y-2">
    <p className='text-lg font-bold text-green-400'>Restaurants in Agbowo</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Basorun</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Ojoo</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Samonda</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Ologuneru</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Agodi-gate</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Dugbe</p>
  </div>

  {/* Column 2 */}
  <div className="flex flex-col space-y-2">
    <p className='text-lg font-bold text-green-400'>Restaurants in Akobo</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Bodija</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Orogun</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Sango</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Moniya</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in University of Ibadan</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Onireke</p>
  </div>

  {/* Column 3 */}
  <div className="flex flex-col space-y-2">
    <p className='text-lg font-bold text-green-400'>Restaurants in Ashi</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Mokola</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Barika</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Eleyele</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in Agodi</p>
    <p className='text-lg font-bold text-green-400'>Restaurants in UCH</p>
  </div>
</div>

    </div>
  )
}

export default Cities

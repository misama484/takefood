import React from 'react';
import Image from 'next/image';

const IngredientCard = ({name, description, price}) => {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center hover:scale-105 hover:bg-gray-200 hover:shadow-xl hover:shadow-primary/25 transition-all">
      <div className="flex justify-center">
        <Image src={'/pizza.png'} alt='pizza' width={70} height={70} className="justify-center"/>
      </div>
      <h4 className="uppercase font-semibold my-2 text-xl">{name}</h4>
      <p>{price}</p>
      <div className='flex flex-row'>
        <button className="bg-primary text-white rounded-full px-6 py-2 mt-3 mr-3">+</button>
        <button className="bg-primary text-white rounded-full px-6 py-2 mt-3">-</button>
      </div>
  </div>
  )
}

export default IngredientCard
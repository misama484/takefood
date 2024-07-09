import React from 'react'

const ExtraIngredient = ({extra, eliminaIngredienteExtra}) => {
  return (
    <div className='flex flex-row justify-between items-center w-[35vh] my-2'>
      <div className='text-lg'>{extra}</div>
      <button className="bg-primary text-white justify-center items-center flex rounded-full w-20" onClick={eliminaIngredienteExtra}>eliminar</button>
    </div>
  )
}

export default ExtraIngredient
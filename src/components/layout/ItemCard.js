"use client"
import Image from "next/image"
import { useState } from "react"
import { Modal, useScrollTrigger } from "@mui/material"
import PizzaOptions from "./PizzaOptions"

function ItemCard({pizza}) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState({});

  const openModal = (pizza) => {
    setShowModal(true)
    setSelectedPizza(pizza)
  }
  console.log(selectedPizza)
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center hover:scale-105 hover:bg-gray-200 hover:shadow-xl hover:shadow-primary/25 transition-all flex flex-col justify-around ">
          <div className="flex justify-center">
            <Image src={'/pizza.png'} alt='pizza' width={150} height={150} className="justify-center"/>
          </div>
          <h4 className="uppercase font-semibold my-2 text-xl">{pizza.nombre}</h4>
          <p className="text-gray-500 text-sm">{pizza.descripcion}</p>
          <p>{pizza.precio}</p>
          <button className="bg-primary text-white rounded-full px-6 py-2 mt-3 mr-3">Añadir</button>
          <button className="bg-primary text-white rounded-full px-6 py-2 mt-3" onClick={() => openModal(pizza)}>Personalizar</button>
        

        {showModal && (
          <Modal 
            open={showModal} 
            onClose={() => setShowModal(false)}
            className="flex justify-center overflow-y-auto"
            >
            <div className="max-h-[calc(100vh -4rem)] overflow-y-auto">
              <PizzaOptions pizza={selectedPizza} nombre={selectedPizza.nombre} descripcion={selectedPizza.descripcion} ingredientes={selectedPizza.ingredientes}/>
            </div>
          </Modal>
        )}
    </div>
  )
}

export default ItemCard
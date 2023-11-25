import Image from "next/image"

function ItemCard({name, description, price}) {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center hover:scale-105 hover:bg-gray-200 hover:shadow-xl hover:shadow-primary/25 transition-all">
          <div className="flex justify-center">
            <Image src={'/pizza.png'} alt='pizza' width={150} height={150} className="justify-center"/>
          </div>
          <h4 className="uppercase font-semibold my-2 text-xl">{name}</h4>
          <p className="text-gray-500 text-sm">{description}</p>
          <p>{price}</p>
          <button className="bg-primary text-white rounded-full px-6 py-2 mt-3 mr-3">Añadir</button>
          <button className="bg-primary text-white rounded-full px-6 py-2 mt-3">Personalizar</button>
        </div>
  )
}

export default ItemCard
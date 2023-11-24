import Image from "next/image"

export default function HomeMenu() {
  return (
    <section className="text-center">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="h-48 w-48 absolute -left-11 -z-10">
          <Image src={'/sallad1.png'} layout={'fill'} objectFit={'contain'} alt='sallad'/>
        </div>
        <div className="h-48 w-48 absolute -right-11 -top-12 -z-10">
          <Image src={'/sallad2.png'} layout={'fill'} objectFit={'contain'} alt='sallad'/>
        </div>
        
      </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">Check out</h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>        
      </div>

      {/**Menu Items */}
      <div className="grid grid-cols-3 gap-4">
        {/**Item */}
        <div className="bg-gray-400 p-4 rounded-lg text-center">
          <div className="flex justify-center">
            <Image src={'/pizza.png'} alt='pizza' width={150} height={150} className="justify-center"/>
          </div>
          <h4 className="uppercase font-semibold my-2 text-xl">Pizza Veronessa</h4>
          <p className="text-gray-500 text-sm">Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat.</p>
          <p>Desde 15 Eur</p>
          <button className="bg-primary text-white rounded-full px-6 py-2 mt-3 mr-3">Añadir</button>
          <button className="bg-primary text-white rounded-full px-6 py-2 mt-3">Personaliza</button>
        </div>
      </div>
    </section>
  )
}

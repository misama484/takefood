import Image from "next/image"
import RightArrow from "../icons/RightArrow"


export default function Hero() {
  return(
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold "><span className="text-primary leading-normal">Hambre?</span><br/> Tenemos <br/>la solucion!!</h1>
        <p className="my-4 text-gray-600">Pide lo que te apetezca, en unos minutos lo tendras contigo!</p>

        <div className="flex gap-4 text-sm">
          <button className="bg-primary text-white px-6 py-2 font-semibold rounded-full flex gap-2 uppercase items-center">
            Pedir Ahora
            <RightArrow/>
          </button>
          <button className="flex gap-2 bg-transparent text-primary px-6 py-2 rounded-full font-semibold items-center">
            Ver Menu
            <RightArrow/>
          </button>
        </div>

      </div>

      <div className="relative">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'}/>
      </div>
      
    </section>
  )
}
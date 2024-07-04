import Image from "next/image"
import ItemCard from "./ItemCard"
import SectionHeaders from "./SectionHeaders"
import PizzaOptions from "./PizzaOptions"
import pizzas from "../../pizzas.json"


export default function HomeMenu() {
  const arrayPizzas = pizzas;


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
      
      <SectionHeaders subHeader={"Check out"} mainHeader={"Menu"}/>

      {/**Menu Items */}
      <div className="grid grid-cols-3 gap-4">
        {/**Item Card*/}
        
        {pizzas.pizzas.map((pizza, index) => {
          return <ItemCard key={index} pizza={pizza}/>
        })}
                 
      </div>
      <PizzaOptions/>
    </section>
  )
}

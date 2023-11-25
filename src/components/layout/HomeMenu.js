import Image from "next/image"
import ItemCard from "./ItemCard"
import SectionHeaders from "./SectionHeaders"


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
      
      <SectionHeaders subHeader={"Check out"} mainHeader={"Menu"}/>

      {/**Menu Items */}
      <div className="grid grid-cols-3 gap-4">
        {/**Item Card*/}
        
          {Array.from({length: 5}).map((_, i) => (
            <ItemCard 
              key={i}
              name={"Veronessa"} 
              description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} 
              price={"Desde 15 Eur"}
            />
          ))}
          
          <ItemCard name={"Veronessa"} description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} price={"Desde 15 Eur"}/>
        <ItemCard name={"Veronessa"} description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} price={"Desde 15 Eur"}/>
        <ItemCard name={"Veronessa"} description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} price={"Desde 15 Eur"}/>
        <ItemCard name={"Veronessa"} description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} price={"Desde 15 Eur"}/>
        <ItemCard name={"Veronessa"} description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} price={"Desde 15 Eur"}/>
        <ItemCard name={"Veronessa"} description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} price={"Desde 15 Eur"}/>
        <ItemCard name={"Veronessa"} description={"Eu consequat elit duis aliqua cillum reprehenderit occaecat pariatur cupidatat eiusmod aliqua irure fugiat."} price={"Desde 15 Eur"}/>
      </div>
    </section>
  )
}

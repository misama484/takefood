import Hero from '../components/layout/Hero'
import Header from '../components/layout/Header'
import HomeMenu from '../components/layout/HomeMenu'
import SectionHeaders from '../components/layout/SectionHeaders'

export default function Home() {
  return (
    <>
      <Hero/>
      <HomeMenu/>
      <section className='text-center my-16'>
        <SectionHeaders subHeader={"Nuestra historia"} mainHeader={"Sobre nosotros"}/>
        <div className='flex flex-col gap-4 max-w-2xl mx-auto mt-4 text-gray-500'>
          <p >
            Voluptate excepteur velit nostrud occaecat cupidatat. Laborum tempor mollit velit ad. Irure consequat ex eiusmod do nisi proident deserunt eiusmod sunt et eu eiusmod cillum cupidatat. In consectetur duis sunt ipsum qui voluptate dolore id pariatur mollit officia mollit mollit.
            Dolor nulla id dolor adipisicing laborum.
          </p>
          <p>
            Incididunt adipisicing in pariatur amet id. Enim anim laborum labore excepteur quis ad anim eiusmod nulla adipisicing non Lorem in. Fugiat reprehenderit pariatur ea ea proident tempor minim anim veniam reprehenderit amet. Irure velit enim qui deserunt esse anim et consequat culpa laborum aliqua enim ipsum eu.
          </p>
        </div>
      </section>

      <section className='text-center my-16'>
        <SectionHeaders subHeader={"Necesitas mas información?"} mainHeader={"Contacta"}/>
        <div className='mt-8'>
          <a className='text-4xl underline text-gray-500' href='tel:+34666112233'>666112233</a>
        </div>        
      </section>

      
    </>
  )
}

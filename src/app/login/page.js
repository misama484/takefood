import Image from "next/image"

function LoginPage() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Inicio de sesion
      </h1>
      <form className="block max-w-xs mx-auto">
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Login</button>
        <div className="my-4 text-center text-gray-500">
          Iniciar con</div>
          <button className="flex justify-center items-center gap-2 text-lg">
          <Image src={'/googleLogo.png'} alt="googleLogo" width={35} height={35}/>
          Google
        </button>
        
      </form>
    </section>
  )
}

export default LoginPage
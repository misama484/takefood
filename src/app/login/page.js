'use client'
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react"

function LoginPage() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ loginInProgress, setLoginInProgres ] = useState(false);

  async function handleFormSubmit(ev){
    ev.preventDefaul();
    setLoginInProgres(true);
    
    await signIn('credentials', {email, password});

    setLoginInProgres(false);
  }


  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Login
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          disabled={loginInProgress}/>
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          disabled={loginInProgress}/>        
        <button type="submit" disabled={loginInProgress}>Iniciar sesion</button>
        
        <div className="my-4 text-center text-gray-500">
          O <br/>Iniciar con</div>
          <button className="flex justify-center items-center gap-2 text-lg" >
          <Image src={'/googleLogo.png'} alt="googleLogo" width={35} height={35}/>
          Google
        </button>
        <div className="my-4 text-center text-gray-500">
          No tienes cuenta? <a href="/register" className="underline font-semibold">Registro</a>
        </div>
        <div className="my-4 text-center text-gray-500">
           <a href="/" className="underline font-semibold">Recuperar password</a>
        </div>
        
      </form>
    </section>
  )
}

export default LoginPage
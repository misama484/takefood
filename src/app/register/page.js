"use client";
import Image from "next/image"
import { useState } from "react"


function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleFormSumbit(ev){
    ev.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers:{'Content-Type':'application/json'},
    })
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Nuevo usuario
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSumbit}>
        <input 
          type="email" 
          placeholder="email" 
          value={email} 
          onChange={ev => setEmail(ev.target.value)}
        />
        <input 
          type="password" 
          placeholder="password"
          value={password}
          onChange={ev => setPassword(ev.target.value)}  
        />
        <button type="submit">Registro</button>
        <div className="my-4 text-center text-gray-500">
          Registrar con</div>
        <button className="flex justify-center items-center gap-2 text-lg">
          <Image src={'/googleLogo.png'} alt="googleLogo" width={35} height={35}/>
          Google
        </button>
        <div className="my-4 text-center text-gray-500">
          Ya tienes cuenta? <a href="/login">Login</a>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage
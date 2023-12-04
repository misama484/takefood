"use client";
import Image from "next/image"
import { useState } from "react"
import Link from "next/link";


function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false)

  async function handleFormSumbit(ev){
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    
    const response = await fetch('/api/register', {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers:{'Content-Type':'application/json'},
    })
   
    if(response.ok){
      setUserCreated(true);      
    }
    else{
      setError(true)
    }
    
    setCreatingUser(false);
    
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Nuevo usuario
      </h1>
      {/**cuando se crea user, muestra esto */}
      {userCreated && (
        <div className="my-4 text-center text-gray-800 font-bold">
          Usuario creado exitosamente.<br/> 
          <Link href={'/login'} className="text-primary underline">Iniciar sesion &raquo;</Link> 
        </div>      
      )}

      {/* si el usuario ya existe, el error cambia estado y muestra este codigo*/}
      {error && (
        <div className="my-4 text-center text-red-600 font-bold">
          Usuario ya existe
        </div>      
      
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSumbit}>
        <input 
          type="email" 
          placeholder="email" 
          value={email} 
          disabled={creatingUser}
          onChange={ev => setEmail(ev.target.value)}
        />
        <input 
          type="password" 
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={ev => setPassword(ev.target.value)}  
        />
        <button type="submit" disabled={creatingUser}>Registro</button>
        <div className="my-4 text-center text-gray-500">
          Registrar con</div>
        <button className="flex justify-center items-center gap-2 text-lg">
          <Image src={'/googleLogo.png'} alt="googleLogo" width={35} height={35}/>
          Google
        </button>
        <div className="my-4 text-center text-gray-500">
          Ya tienes cuenta? <a href="/login" className="underline font-semibold">Login</a>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage
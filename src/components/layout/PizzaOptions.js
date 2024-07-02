import React from 'react'
import Input from "../ui/input"
import Button from "../ui/button"

const PizzaOptions = () => {
  return (
    <div className='border-2 w-[90vh] h-[90vh]'>
      <h1 className='text-2xl my-3'>Pizza Options</h1>
      <div className="flex justify-center items-center flex-col gap-6">
      <Input type="email" placeholder="Email"/>
      <Input type="password" placeholder="Password"/>
      <Button onClick={() => {handlePassword}}>Login</Button>
    </div>
    </div>
  )
}

export default PizzaOptions
"use client"
import React, { useState } from 'react'
import {Button, Input, Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import IngredientCard from './IngredientCard'

const PizzaOptions = (pizza) => {
  const [masa, setMasa] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [listaIngredientes, setListaIngredientes] = useState([]);

  const handleMasa = (event) => {
    setMasa(event.target.value);
  }
  const handleIngrediente = (event) => {
    setIngrediente(event.target.value)
    setListaIngredientes([...listaIngredientes, event.target.value])
  }

  console.log(pizza)

  return (
    <div className='border-2 w-[90vh] h-[90vh] rounded-lg my-4 bg-gray-400 '>
      <h1 className='text-2xl my-3'>Pizza Options</h1>
      <div className="flex justify-center items-center flex-col gap-6">
      <div className='grid-cols-2 flex flex-row gap-6 w-full border '>
        <Box sx={{ minWidth: 120, display: "flex", flexDirection:"row", gap: 10, width: "auto" }}>
          <FormControl fullWidth className='flex w-[1000px]'>
            <InputLabel id="demo-simple-select-label">Masa</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={masa}
              label="Age"
              onChange={handleMasa}
            >
              <MenuItem value={"Fina"}>Fina</MenuItem>
              <MenuItem value={"Casera"}>Casera</MenuItem>
              <MenuItem value={"Rellena"}>Rellena queso</MenuItem>
            </Select>          
          </FormControl>
          <FormControl fullWidth className='flex w-[1000px]'>
            <InputLabel id="demo-simple-select-label">Ingredientes</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ingrediente}
              label="Ingredientes"
              onChange={handleIngrediente}
            >
              <MenuItem value={"mozzarella"} onSelect={handleIngrediente}>Mozarella</MenuItem>
              <MenuItem value={"bacon"}>Bacon</MenuItem>
              <MenuItem value={"tomate"}>Tomate</MenuItem>
              <Button onClick={handleIngrediente}>Anyadir</Button>
            </Select>          
          </FormControl>
        </Box>      
      </div>
      <h1>Masa: {masa}</h1>
      
      <div>
        <h1>Ingredientes:</h1>
        
        <ul>
          {listaIngredientes.map((P, index) => (
            <li key={index}>{""}</li>
          ))}
        </ul>
      </div>
      <Button onClick={""}>Aceptar</Button>
    </div>
      
    </div>
  )
}

export default PizzaOptions

{/*
  
  <div className='grid grid-cols-3 gap-4 mx-3'>
        {pizza.pizzas.map((p, i) => (
         <IngredientCard 
            key={i}
            ingredientes={p.nombre}
          /> 
        ))}
      </div>
  
  */}
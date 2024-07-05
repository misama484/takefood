"use client"
import React, { useEffect, useState } from 'react'
import {Button, Input, Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import IngredientCard from './IngredientCard'

const PizzaOptions = ({nombre, descripcion, ingredientes}) => {
  const [masa, setMasa] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState([])

  const handleMasa = (event) => {
    setMasa(event.target.value);
  }
  const handleIngrediente = (event) => {
    setIngrediente(event.target.value)
    setListaIngredientes([...listaIngredientes, event.target.value])
  }

  useEffect(() => {
    setListaIngredientes(ingredientes)    
  },[])
  

  console.log(ingredientes)
  //console.log(selectedPizza)
  return (
    <div className='w-[90vh] h-[90vh] rounded-lg my-4 bg-gray-400 '>
      <h1 className='text-2xl my-3 uppercase'>{nombre}</h1>
      <div className="flex justify-center items-center flex-col gap-6">
      <div className='grid-cols-2 flex flex-row gap-6 w-full'>
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
              <MenuItem value={"mozzarella"} onSelect={handleIngrediente}>Mozzarella</MenuItem>
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
        <p>{nombre}</p>
        
          {listaIngredientes.map((ingrediente, index) => (
            <div key={index} className='flex flex-row gap-2'>
              <IngredientCard 
              ingrediente={ingrediente}
              />
          </div> 
          ))}
        </div>
      </div>
      <Button onClick={""}>Aceptar</Button>
    </div>
      
    
  )
}

export default PizzaOptions

{/*
  
  <div className='grid grid-cols-3 gap-4 mx-3'>
        {pizza.pizzas.map((p, i) => (
         
        ))}
      </div>

      
  
  */}
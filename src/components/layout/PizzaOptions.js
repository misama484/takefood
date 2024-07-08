"use client"
import React, { useEffect, useState } from 'react'
import {Button, Input, Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import IngredientCard from './IngredientCard'
import pizzas from "../../pizzas.json"

const PizzaOptions = ({pizza, nombre, descripcion, ingredientes}) => {
  const [masa, setMasa] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState({})
  const [ingredientesPizza, setIngredientesPizza] = useState([ingredientes]);

  const handleMasa = (event) => {
    setMasa(event.target.value);
  }
  const handleIngrediente = (event) => {
    setIngrediente(event.target.value)
    //setListaIngredientes([...listaIngredientes, event.target.value])
  }

  useEffect(() => {    
    setSelectedPizza(pizza)
    setListaIngredientes(ingredientes)
  })
  let arrayIngredientes = pizzas.ingredientesUnicos;
  
  /* Manejo de ingredientes */
  const agregarIngrediente = (ingrediente) => {
    setListaIngredientes((prevLista) => [...prevLista, ingrediente])
    setIngredientesPizza((prevIngredientes) => prevIngredientes.filter((item) => item !== ingrediente))
  }
  const eliminarIngrediente = (ingrediente) => {
    setListaIngredientes((prevIngredientes) => [...prevIngredientes, ingrediente])
    setIngredientesPizza((prevLista) => prevLista.filter((item) => item !== ingrediente))
  }

  console.log(ingredientes)
  //console.log(nombre)
  return (
    <div className='w-[90vh] h-auto rounded-lg my-4 bg-gray-400 '>
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
              {arrayIngredientes.map((ingrediente, index) => {
                return <MenuItem key={index} value={ingrediente}>{ingrediente}</MenuItem>
              })}
              <Button onClick={handleIngrediente}>Anyadir</Button>
            </Select>          
          </FormControl>
        </Box>      
      </div>
      <h1>Masa: {masa}</h1>
      
      <div>
        <p>{nombre}</p>
        <h1>Ingredientes:</h1>
        {/* INGREDIENTES SELECTEDPIZZA */}
        <div className='grid grid-cols-3 border '>
          {listaIngredientes.map((ingrediente, index) => (
            <div key={index} className='flex flex-col gap-2'>
             <IngredientCard 
              ingrediente={ingrediente}
              agregarIngrediente = {() => agregarIngrediente(ingrediente)}
              EliminarIngrediente = {() => eliminarIngrediente(ingrediente)}
             />
            </div> 
          ))}
        </div>
        {/* CAJA DE INGREDIENTES */}
        <p>Añadir ingrediente</p>
        <div className='grid grid-cols-3 gap-2 border'>
         {arrayIngredientes.map((ingrediente, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <IngredientCard 
              ingrediente={ingrediente}
              agregarIngrediente = {() => agregarIngrediente(ingrediente)}
              EliminarIngrediente = {() => eliminarIngrediente(ingrediente)}
              />
            </div> 
          ))}
        </div>
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
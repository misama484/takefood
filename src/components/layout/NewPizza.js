"use client"
import React, { useEffect, useState } from 'react'
import {Button, Input, Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import IngredientCard from './IngredientCard'
import pizzas from "../../pizzas.json"
import ExtraIngredient from "./ExtraIngredient"

const NewPizza = ({pizza, nombre, descripcion, ingredientes}) => {
  const [masa, setMasa] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const [listaIngredientes, setListaIngredientes] = useState([]);
  const [ingredientesNewPizza, setIngredientesNewPizza] = useState([]);
  const [ingredientesExtra, setIngredientesExtra] = useState([]);
  const [listaExtras, setListaExtras] = useState([])
  const [tamaño, setTamaño] = useState("")


  useEffect(() => {    
      setListaIngredientes(pizzas.ingredientesUnicos);
      setIngredientesExtra(pizzas.ingredientesExtra);
    })
  const handleMasa = (event) => {
    setMasa(event.target.value);
  }
  const handleIngrediente = (event) => {
    setIngrediente(event.target.value)
    //setListaIngredientes([...listaIngredientes, event.target.value])
  }
  const handleTamaño = (event) => {
    setTamaño(event.target.value)
  }
  const handleIngredienteExtra = (event) => {
    if(listaExtras.includes(event.target.value)){
      alert("Extra ya añadido")
      return
    }
    setListaExtras([...listaExtras, event.target.value])
  }
  //console.log(listaExtras)
  const eliminaIngredienteExtra = (extra) => {
    let listaExtraTemp = listaExtras.filter((ing) => ing !== extra)
    setListaExtras(listaExtraTemp)
  }
  
    
  /* Manejo de ingredientes */
  const agregarIngrediente = (ingrediente) => {
    if (ingredientesNewPizza.includes(ingrediente)) {
      alert("ingrediente ya en la pizza")
      return
    }
    setIngredientesNewPizza([...ingredientesNewPizza, ingrediente])
  }
  const eliminarIngrediente = (ingrediente) => {
    let newIngredientes = ingredientesNewPizza.filter((ing) => ing !== ingrediente)
    setIngredientesNewPizza(newIngredientes)
  }

  //console.log(ingredientes)
  //console.log(nombre)
  return (
    <div className='w-[80vh] h-auto p-6 rounded-lg my-4 bg-gray-400 '>
      <h1 className='text-2xl my-3 uppercase'>{nombre}</h1>
      <div className="flex justify-center items-center flex-col gap-6">
      <div className='flex flex-col gap-6 w-full'>
        <Box sx={{ minWidth: 120, display: "flex", flexDirection:"row", gap: 10, width: "auto" }}>
          <FormControl fullWidth className='flex w-[100px]'>
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

          <FormControl fullWidth className='flex w-[100px]'>
            <InputLabel>Tamaño</InputLabel>
            <Select
              value={tamaño}
              label="Tamaño"
              onChange={handleTamaño}
            >
              <MenuItem value={"S"}>Pequeña</MenuItem>
              <MenuItem value={"M"}>Mediana</MenuItem>
              <MenuItem value={"XL"}>Grande</MenuItem>
            </Select>          
          </FormControl>

          <FormControl fullWidth className='flex w-[100px]'>
            <InputLabel id="demo-simple-select-label">Ingredientes Extra</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={ingrediente}
              label="Ingredientes Extra"
              onChange={handleIngredienteExtra}
            >
              {ingredientesExtra.map((ingrediente, index) => {
                return <MenuItem key={index} value={ingrediente} onClick={handleIngredienteExtra}>{ingrediente}</MenuItem>
              })}
              <Button onClick={handleIngrediente}>Anyadir</Button>
            </Select>          
          </FormControl>
        </Box>      
      </div>
      
      
      <div className=''>
        <p className='font-bold text-xl flex justify-center m-6'>NEW PIZZA</p>
        <p className='font-bold text-lg flex justify-center m-6'>Masa: {masa}</p>
        <p className='font-bold text-lg flex justify-center m-6'>Lista de ingredientes extra:</p>
        {listaExtras.map((extra, index) => (
          <ExtraIngredient key = {index} extra = {extra} eliminaIngredienteExtra={() => eliminaIngredienteExtra(extra)}/>
        ))}

        <h1 className='font-bold text-lg flex justify-center m-6'>Ingredientes:</h1>
        {/* INGREDIENTES NEWPIZZA */}
        <div className='grid grid-cols-3 gap-2'>
          {ingredientesNewPizza.map((ingrediente, index) => (
            <div key={index} className='flex flex-col gap-2'>
             <IngredientCard 
              ingrediente={ingrediente}
              agregarIngrediente = {() => agregarIngrediente(ingrediente)}
              eliminarIngrediente = {() => eliminarIngrediente(ingrediente)}
             />
            </div> 
          ))}
        </div>
        {/* CAJA DE INGREDIENTES */}
        <p className='font-bold text-lg flex justify-center m-6'>Añadir ingrediente:</p>
        <div className='grid grid-cols-3 gap-2'>
         {listaIngredientes.map((ingrediente, index) => (
            <div key={index} className='flex flex-col gap-2'>
              <IngredientCard 
              ingrediente={ingrediente}
              agregarIngrediente = {() => agregarIngrediente(ingrediente)}
              eliminarIngrediente = {() => eliminarIngrediente(ingrediente)}
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

export default NewPizza

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './componets/Result'
import Hello from './componets/Hello'
import Form from './form'
import Formnew from './Formnew'
import Counter from './counter'
function App() {

  const [name,setName] =useState('')
  const [roll,setRoll] =useState('')


  function handleSubmit(e){
    e.preventDefault()
   console.log(name,roll);
  }




  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:<input type='text' onChange={(e)=>setName(e.target.value)}/>
        rollNo:<input type='number' onChange={(e)=>setRoll(e.target.value)}/>
        <input type="submit" />
      </form>

      <Form/>
      <Formnew/>
      <Counter/>
    </>
  )
}

export default App

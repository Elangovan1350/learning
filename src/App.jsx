import { useState } from "react"

export default function App() {
  const[color,setColor]=useState()
  const handleColor=(e)=>{
    const{value}=e.target
    setColor(value)
  }
  return (
    <div className="h-screen bg-slate-400">
    <h1 style={{color:`${color}`}} className="text-3xl font-bold underline text-center">
      Hello world!
    </h1>
    <form action="">
      <input type="color" name="" id=""  onChange={handleColor}/>
    </form>
    </div>
  )
}
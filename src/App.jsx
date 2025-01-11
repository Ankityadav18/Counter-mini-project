import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[count,setStateCount]=useState(0)
  console.log(count);
  let increment=()=>{
    setStateCount(count+1);
  }
  let Decrement=()=>{
    setStateCount(count-1);
  }
  let Reset=()=>{
    setStateCount(0 )
  }

  let changeColors=()=>{
    if(count>0){
      return "green"
    }
    else if(count<0){
   return "red"
    }
    else{
     return "skyblue"
    }
  }
 

  return (
    <>
    <div className='section'>
  <h1 style={{color:changeColors()}}> Counter:{count}</h1>
  <button className='plus' onClick={increment}>Increment +</button>
  <button className='minus' onClick={Decrement}>Decrement -</button>
  <button  className='constant' onClick={Reset}>Reset 0</button>
  </div>
    </>
  )
}

export default App

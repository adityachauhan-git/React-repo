import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
    const [count, setCount]= useState(0);

    function incrementClick(){
        setCount(prevCount=>{
          return ++prevCount;
        })
    }
    function decrementClick(){
        setCount(prevCount=>{
          return --prevCount;
        })
    }

    return(
      <div>
      <button onClick={incrementClick}>+</button>
      <p>{count}</p>
      <button onClick={decrementClick}>-</button>



      <h1>This is count: {count}</h1>
      </div>
    )
}



export default App

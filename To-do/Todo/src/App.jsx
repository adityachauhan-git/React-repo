import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {

  const [taskList , setTask] = useState([])

  function addTask(task){
      setTask(previousTasks=>[...previousTasks, task])
  }

  return (
    <>
      <input type="text" />
      <ul className='taskList'>

      

      </ul>
    </>
  )
}

export default App

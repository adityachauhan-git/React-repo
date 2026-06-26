
import './css/App.css'

import NavBar from "./components/NavBar.jsx"

import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'

import {Routes , Route} from "react-router-dom"


function App() {
  return (

  <div className="app-shell">
    
  <NavBar/>
  
  <main className="main-content">
    <Routes>
      <Route path="/" element = {<Home/>}/>

      <Route path="/favs" element = {<Favorites/>}/>
    </Routes>
  </main>
  </div>
  )
}



export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShortList from "./components/ShortList"
import Home from "./pages/Home"
import LongStay from "./components/LongStay"
import PropertiesPage from "./pages/PropertiesPage"
import './App.css'
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Shortstay' element={<ShortList />} />
    <Route path='/Longstay' element={<LongStay />} />
    <Route path='/properties' element={<PropertiesPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

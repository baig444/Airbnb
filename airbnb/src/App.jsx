import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShortList from "./components/ShortList"
import Home from "./pages/Home"
import LongStay from "./components/LongStay"
import PropertiesPage from "./pages/PropertiesPage"
import Navbar from "./components/Navbar"
import Explore from "./pages/Explore"
import Dashboard from "./pages/Dashboard"
import Auth from "./Auth/Auth"
import ProtectedRoute from "./Protectedroute/ProtectedRoute"
const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
     <Navbar />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/:stayType/:destination/short/:id' element={<ShortList />} />
    <Route path='/:stayType/:destination/long/:id' element={<LongStay />} />
    <Route path='/explore/:stayType/:destination' element={<PropertiesPage />} />
    <Route path="/explore/:stayType" element={<Explore />} />
    <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
    <Route path='/auth' element={<Auth/>} />
    <Route path='*' element={<Home/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

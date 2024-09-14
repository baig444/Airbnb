import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import ShortList from './components/ShortList.jsx'

createRoot(document.getElementById('root')).render(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/Shortlist' element={<ShortList />} />
    </Routes>
    </BrowserRouter>
    </div>
)

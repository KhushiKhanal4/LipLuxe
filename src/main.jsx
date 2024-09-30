import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import LipCare from './components/LipCare.jsx'
import Lipgloss from './components/Lipgloss.jsx'
import Lipstick from './components/Lipstick.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>}/>
       <Route path='LipCare' element={<LipCare/>}/>
       <Route path='Lipgloss' element={<Lipgloss/>}/>
       <Route path='Lipstick' element={<Lipstick/>}/>
       <Route path='Cart' element={<Cart/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

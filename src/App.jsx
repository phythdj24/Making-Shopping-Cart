import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Productc from './components/Productc'
import CartPage from './components/CartPage'

function App() {


  return (
    <>
  
   <BrowserRouter>
   <Routes>

    <Route element={<Productc />} path='/' />
    <Route element={<CartPage />} path='/cart' />
  

    





   </Routes>
   
   
   
   
   
   </BrowserRouter>
     
    
    </>
  )
}

export default App

import React from 'react'
import HomePage from './views/home/HomePage'
import { Route,Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import SigninPage from './views/signup/SigninPage'
import LoginPage from './views/login/LoginPage'
import Dashboard from './components/Dashboard'
import Pricing from './views/Pricing/Pricing'
import QRCodeGenerator from './components/QRCodeGenerator'
const App = () => {
  return (
    <div>
        <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/signup' element={<SigninPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/qr' element={<QRCodeGenerator/>} />

          
        </Routes>
        </BrowserRouter>
      </div>
  
  )
}

export default App

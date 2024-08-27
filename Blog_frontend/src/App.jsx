import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Service } from './Pages/Service'
import { Projects } from './Pages/Projects'
import { DashBoard } from './Pages/DashBoard'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'
import  Navbar  from './Components/Nav'

export const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </Router>
  )
}

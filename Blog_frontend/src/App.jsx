import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Service } from './Pages/Service'
import { Projects } from './Pages/Projects'
import { DashBoard } from './Pages/DashBoard'
import { SignIn } from './Pages/SignIn'
import { SignUp } from './Pages/SignUp'

export const App = () => {
  return (

    <h1 className='text-3xl text-red-500'>
      Hellow world !
    </h1>
  )
}

import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {Link} from 'react-router-dom'
import {Label, TextInput} from 'flowbite-react'

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
    } catch (error) {
      
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-l from-pink-200 to-cyan-200 flex items-center justify-center'>
      <div className='max-w-lg px-8 py-8  bg-white shadow-xl'>
        <div className='flex items-center justify-center'>
          <img src={Logo} alt="RG's" className='w-[50%]' />
        </div>
        <h1 className='text-center py-4 font-thin'>Sign in your account</h1>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className="">
            <Label
              value=" Your Name :"
              className='text-1xl'
            />
            <TextInput
              type='text'
              placeholder='Username'
              id='Username'
              onChange={handleChange}
              />
          </div>
          <div className="">
            <Label
              value=" Your Email :"
              className='text-1xl'
            />
            <TextInput
              type='text'
              placeholder='email'
              id='email'
              onChange={handleChange}
              />
          </div>
          <div className="">
            <Label
              value=" Your Password :"
              className='text-1xl pb-1'
            />
            <TextInput
              type='password'
              placeholder='password'
              id='password'
              onChange={handleChange}
              />
          </div>
          <button className='btn-primary w-full '> 
            Sign Up
          </button>
        </form>
        <div className='pt-4 flex gap-2 text-sm mt-1'>
          <span>Have an Account ? </span>
          <Link to='/sign-in' className='text-blue-600 hover:text-red-900'>
            <u> Sign in</u>
          </Link> 
        </div>
       </div>
      </div>

    
  )
}

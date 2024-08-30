import React, { useState } from 'react'
import { Label, TextInput } from 'flowbite-react'
import Logo from '../assets/Logo.png'



export const SignIn = () => {
  
  const [formData, setFormData] = useState({});
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value });
  }
  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
  
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-pink-200 to-cyan-200 flex items-center justify-center'>
      <div className="max-w-lg px-8 py-8 bg-white shadow-2xl">
        <div className="flex flex-col items-center justify-center gap-3 py-4">
          <img src={Logo} alt="Logo" className='w-1/2' />
          <h1 className='text-cente font-thin'>Have any account ? Sign in.</h1>
        </div>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <Label
              value="Enter Email"
              className='text-1xl'
            />
            <TextInput
              type="text"
              placeholder="abc@gmail.com"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <Label
              value="Enter Password :"
              className='text-1xl'
            />
            <TextInput
              type="password"
              placeholder="Ebter Password..."
              id="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className='btn-primary w-full'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

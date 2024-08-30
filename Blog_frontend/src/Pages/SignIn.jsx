import React, { useState } from 'react'
import { Label, Spinner, TextInput } from 'flowbite-react'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../assets/Logo.png'



export const SignIn = () => {
  
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  }
  // console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage('Fill all fields')
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message)
      };
      setLoading(false);
      if (res.ok) {
        navigate('/',{replace:true})
      };
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  
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
            <button className='btn-primary w-full' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='md' className='text-white' />
                  </>
                ) : 'Sign In'
                }
            </button>
          </div>
        </form>

        <div className="py-2 flex gap-2 text-sm mt-1">
          <span>Have not any account ? </span> <Link to='/sign-up' className='text-blue-700 hover:text-red-700'><u>Sign Up</u></Link>
        </div>

        {
          errorMessage && (
            <div className="text-red-800 mt-3 text-center">
              {errorMessage}
            </div>
          )
        }
      </div>
    </div>
  )
}

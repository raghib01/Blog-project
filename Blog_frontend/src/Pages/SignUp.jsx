import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import {Link, useNavigate} from 'react-router-dom'
import { Label, Spinner, TextInput } from 'flowbite-react'

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  //set error for clientside function
  const [errorMessage, setErrorMessage] = useState(null);
  //set loding function
  const [loading, setLoading] = useState(false);
  //sign in navigation
  const navigate = useNavigate();


  const handleChange = (e) => {
    //trim for space before
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please Fill all fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      // setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      //set error for same name or duplicacy
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false);
      //if all are ok so go to sign in page
      if (res.ok) {
        navigate('/sign-in', { replace: true });
      };
    } catch (error) {
      //set clinet side error for user
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
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
              placeholder='Input Username'
              id='username'
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
              placeholder='abc@gmail.com'
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
              placeholder='Enter password'
              id='password'
              onChange={handleChange}
              />
          </div>
          <button className='btn-primary w-full ' disabled={loading}> 
            {/* create a spinner under button */}
            {
              loading ? (
                <>
                  <Spinner size='sm' className='text-white'/> <span className='text-white pl-3'>Loading..</span>
                </>
              ) : 'Sign Up'
            }
          </button>
        </form>

        <div className='pt-4 flex gap-2 text-sm mt-1'>
          <span>Have an Account ? </span>
          <Link to='/sign-in' className='text-blue-600 hover:text-red-900'>
            <u> Sign in</u>
          </Link> 
        </div>
        
        {/* set alert for user */}
        {
          errorMessage && (
            <div className='text-red-800 text-center m-3'>
              {errorMessage}
            </div>  // end of errorMessage div  
          )  // end of errorMessage conditional rendering
        }
       </div>
      </div>

    
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer class="w-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!--Grid--> */}
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
            <div class="col-span-full lg:col-span-2 flex flex-col justify-center items-center lg:mt-10">
                <Link to="/"  class="flex justify-center lg:justify-start ">
                   <img src={Logo} alt="" />
                </Link>
                <p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Make yourself at home with read </p>    
            </div>
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left ">
                <h4 class="text-lg text-gray-900 font-medium mb-7">Featurs</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><Link to="/"  class="text-gray-600 hover:text-gray-900">Home</Link></li>
                    <li class="mb-6"><Link to="/about"  class=" text-gray-600 hover:text-gray-900">About</Link></li>
                    <li class="mb-6"><Link to='/project'  class=" text-gray-600 hover:text-gray-900">Projects</Link></li>
                </ul>
            </div>
        
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                    <li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">User Guide</a></li>
                </ul>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:mx-auto text-left">
                <h4 class="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                <ul class="text-sm  transition-all duration-500">
                    <li class="mb-6"><a href="javascript:;"  class="text-gray-600 hover:text-gray-900">News</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
                    <li class="mb-6"><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">New Updates</a></li>
                    <li><a href="javascript:;"  class=" text-gray-600 hover:text-gray-900">Events</a></li>
                </ul>
            </div>
                  {/* create search bar */
                  }
            <div className="relative flex justify-end items-center max-w-fit ">
                <IoSearchOutline className='absolute text-1xl text-gray-500 mr-2' />
                 <input type="text" placeholder='Search ...' className='w-full rounded-md border-2 border-blue-300 focus:bg-slate-100 focus:outline-sky-500'/>
            </div>
        </div>
        <div class="py-7 border-t border-gray-200">
            <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                <span class="text-sm text-gray-500 ">©<a href="https://www.facebook.com/ragib01">RAGIB's</a> 2024, All rights reserved.</span>
                <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                    <Link to="https://www.facebook.com/ragib01"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                    <FaFacebook className='text-white text-3xl'/>
                    </Link>
                    <Link to="https://youtube.com" class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                    <FaXTwitter className='text-white text-2xl'/>
                    </Link>
                    <Link to="#"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                        <FaYoutube className='text-white text-2xl'/>
                            
                    </Link>
                    <Link to="#"  class="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600">
                      <FaInstagram className='text-white text-2xl'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</footer>
                                      
  )
}

export default Footer;
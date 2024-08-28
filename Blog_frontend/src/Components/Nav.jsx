import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiHome, FiInfo, FiPhone } from 'react-icons/fi';
import { GoProject } from "react-icons/go";
import { MdHomeRepairService } from "react-icons/md";
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-gradient-to-l from-pink-200 to-cyan-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="" className='flex w-1/2 sm:px-2'/>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className=" text-2xl md:hidden "
          onClick={toggleNav}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links */}
        <div className={`hidden md:flex items-center space-x-6 font-semibold ${navOpen ? 'block' : 'hidden'} `}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-red-800 flex items-center' : ' flex items-center'
            }
            onClick={() => setNavOpen(false)}
          >
            <FiHome className="mr-2" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-red-800 flex items-center' : ' flex items-center'
            }
            onClick={() => setNavOpen(false)}
          >
            <FiInfo className="mr-2" />
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? 'text-red-800 flex items-center' : ' flex items-center'
            }
            onClick={() => setNavOpen(false)}
          >
            <MdHomeRepairService className="mr-2" />
            Service
            </NavLink>
            <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? 'text-red-800 flex items-center' : ' flex items-center'
            }
            onClick={() => setNavOpen(false)}
          >
            <GoProject className="mr-2" />
            Project
            </NavLink>
        <Link to='/sign-up'>   <button className='btn-primary'>Sign Up</button>    </Link> 
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden mt-4 space-y-2 font-semibold">
          <NavLink
            to="/"
            className="  flex items-center justify-center px-4 py-2 hover:bg-primary text-dark hover:text-white"
            onClick={() => setNavOpen(false)}
          >
            <FiHome className="mr-2" />
            Home
          </NavLink>
          <NavLink
            to="/about"
            className=" text-dark flex items-center justify-center px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setNavOpen(false)}
          >
            <FiInfo className="mr-2" />
            About
          </NavLink>
          <NavLink
            to="/service"
            className=" text-dark flex items-center justify-center px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setNavOpen(false)}
          >
            <MdHomeRepairService className="mr-2" />
            Service
            </NavLink>
            <NavLink
            to="/project"
            className=" text-dark flex items-center justify-center px-4 py-2 hover:bg-primary hover:text-white"
            onClick={() => setNavOpen(false)}
          >
            <GoProject className="mr-2" />
            Project
            </NavLink>
                  <Link to='/sign-up' className='flex justify-center items-center py-2'
                      onClick={() => setNavOpen(false)}>   <button className='btn-primary w-full'>Sign Up</button></Link> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;

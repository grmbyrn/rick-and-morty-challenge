import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-6">
      <div className="flex justify-end">
          <NavLink to='/' className='px-4'>
              Characters
          </NavLink>
          <NavLink to='episodes' className='px-4'>
              Episodes
          </NavLink>
          <NavLink to='locations' className='px-4'>
              Locations
          </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
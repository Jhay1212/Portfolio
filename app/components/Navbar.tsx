import React from 'react'

const Navbar = () => {
  return (
    <div className='w-min-screen h-14 bg-black text-white text-3xl'>
      <div className="w-full flex items-baseline justify-around mx-4 py-3">
        <h2>LOGO</h2>
        <ul className="flex justiify-between items-center">
          <li className="nav_item">My Work</li>
          <li className="nav_item">About Me</li>
          <li className="nav_item">Contacts</li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
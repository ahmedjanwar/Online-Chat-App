import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>iChat</span>
      <div className='user'>
          <img src="https://media.istockphoto.com/photos/young-male-skateboarder-at-skate-park-picture-id1363625946?b=1&k=20&m=1363625946&s=170667a&w=0&h=nAc971_mOPSG0RMDvThx3J2f__7k_fEOI660l2BVMYg=" alt="" />
          <span>Hamood</span>
          <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' id="" />
      </div>
      <div className="userChat">
        <img src="https://media.istockphoto.com/photos/young-male-skateboarder-at-skate-park-picture-id1363625946?b=1&k=20&m=1363625946&s=170667a&w=0&h=nAc971_mOPSG0RMDvThx3J2f__7k_fEOI660l2BVMYg=" alt="" />
        <div className="userChatInfo">
          <span>Hamood</span>
        </div>
      </div>
    </div>
  )
}

export default Search
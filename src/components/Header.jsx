import React from 'react'
import phoneicon from '../assets/phone.png'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='logo bg-red-600'>
        <h1>Logo</h1>
      </div>
      <div>
        <ul>
            <li>Home</li>
            <li>Airport parking</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <div><img src={phoneicon} alt="" /></div>
        <div>
            <h4>Phone Number</h4>
            <p>098765431</p>
        </div>
      </div>
    </div>
  )
}

export default Header

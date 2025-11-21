import React from 'react'
import './header.css'
import logo from '../../../public/Dudeshape.png'
function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="" />
          <ul className='nav__middle'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <ul className='nav__end'>
            <li><i class="fa-regular fa-user"></i></li>
            <li><i class="fa-solid fa-basket-shopping"></i></li>
            <li><i class="fa-solid fa-list"></i></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './section1.css'
import img from '../../../../public/stn1png.png'
function Section1() {
  return (
    <section className='stn1'>
      <div className='stn1__start'>
        <h1>Get Your Best Cosmetic Products Here</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        <input placeholder='Search...' type="search" />
        <button>Shop Now</button>
      </div>
         <img src={img} alt="" />
    </section>
  )
}

export default Section1
import React from 'react'
import './section6.css'
import logo from "./pretty.png"
function Section6() {
  return (


    
    <div className='lз' >

      <div className='ele ' >
<div className='l' >
   <img src={logo} alt="" />
 
</div>

 <div className='r' >
<div class="review-box">
  <h2 class="review-title">Amazing Cosmetic</h2>

  <div class="stars">
    ★★★★★☆
  </div>

  <p class="review-text">
    <span class="quote-start">❝</span>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
    <span class="quote-end">❞</span>
  </p>

  <div class="author">
    <h3>Rusmin Islam</h3>
    <p>Designer</p>
  </div>
</div>

 </div>
    </div>



<div className='l' >
  <h2>Subscribe to Get Our Letest News</h2>
<div className='k' >
  <input placeholder='Enter email' type="text" />
<button>Subscribe</button>
</div>
</div>
    </div>
  )
}

export default Section6
import React from 'react'
import './section2.css'
import logo1 from"./Airbnb Logo.png"
import logo2 from"./Hubspot Logo.png"
import logo3 from"./Google Logo.png"
import logo4 from"./Microsoft Logo.png"
import logo5 from"./Walmart Logo.png"
import logo6 from"./FedEx Logo.png"


function Section2() {
  return (
    <div className="section2">
      <div className="section2-images">
<img src={logo1} alt="rasm" />
<img src={logo2} alt="rasm" />
<img src={logo3} alt="rasm" />
<img src={logo4} alt="rasm" />
<img src={logo5} alt="rasm" />
<img src={logo6} alt="rasm" />
      </div>
    </div>
  )
}

export default Section2
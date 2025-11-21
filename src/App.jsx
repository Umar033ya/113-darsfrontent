import { useState, useEffect } from 'react'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Section1 from './components/main/section1/section1.jsx'
import Section2 from './components/main/section2/section2.jsx'
import Section3 from './components/main/section3/section3.jsx'
import Section4 from './components/main/section4/section4.jsx'
import Section5 from './components/main/section5/section5.jsx'
import Section6 from './components/main/section6/section6.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <main>
       <div className="container">
       <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
       </div>
      </main>
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import EmpNav from '../header/EmpNav'
import Footer from '../footer/Footer';

const EmpHome = () => {
  return (
    <div>
      <EmpNav />
      <img style={{width:'100%'}} src="https://img.freepik.com/free-vector/businessman-entrepreneur-working-at-office-desk_3446-678.jpg" alt="cover" />
      <h1 style={{top:'20%',left:'10%',position:'absolute',color:'darkcyan'}}>WELCOME </h1>
      <Footer />
    </div>
  )
}

export default EmpHome;
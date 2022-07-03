import React from 'react'
import StudNav from '../header/StudNav'
import Footer from '../footer/Footer';

const StudHome = () => {
  return (
    <div>
      <StudNav />
      <img style={{width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoJ72OUczdtQ2BZYqyXtaD4HMm7MZ9QvorQ&usqp=CAU" alt="cover" />
      <h1 style={{top:'20%',left:'10%',position:'absolute',color:"cyan"}}>WELCOME </h1>
      <Footer />
    </div>
  )
}

export default StudHome;
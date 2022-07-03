import React from 'react';
import Footer from '../footer/Footer';
import './Home.css';
import pic1 from '../../assets/mern.jpg';
import pic2 from '../../assets/mean.jpg';
import pic3 from '../../assets/digital.png';
import Header from '../header/Header';
import { useNavigate } from "react-router-dom";
import { Navigate } from 'react-router';

const Home =()=> {

  let navigate = useNavigate();
  const click=()=>{
    navigate('/courses');
  }

  return(
    <div>
      <Header />
      <div className='text-on-image'>
        <img className="homeimage" src="https://images.unsplash.com/photo-1610572589034-db4158d44066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5mb3JtYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        <h1  className='title1'>Boost Your Skills</h1>
        <h2 className='title2'>With The New Technologies</h2>
        <div className='para'>
          <h3>Why to associate with us?</h3>
          <li>Government supported and Industry-led Program</li>
          <li>Government scholarships and affordable fees model</li>
          <li>One-stop shop for Students, Unemployed and Working professionals</li>
          <h4 className='heading2'>COURSES</h4>
          <div style={{display:'flex'}}>
            <div style={{padding:25}}>
              <img src={pic1} alt="" className='courseimg' />
              <br></br><br></br>
              <h6 className='coursehead'>MERN Stack Development</h6>
              <p className='coursepara'>Certified specialist in MERN stack</p>
            </div>
            <div  style={{padding:25}}>
              <img src={pic2} alt="" className='courseimg' />
              <br></br><br></br>
              <h6 className='coursehead'>MEAN Stack Development</h6>
              <p className='coursepara'>Certified specialist in MEAN stack</p>
            </div>
            <div  style={{padding:25}}>
              <img src={pic3} alt="" className='courseimg' />
              <br></br><br></br>
              <h6 className='coursehead'>Digital Marketing</h6>
              <p className='coursepara'>Certified specialist in Digital Marketing</p>
            </div>
          </div>
        </div>
       </div>
      <button onClick={click}className='bttn'>show more</button>
      <Footer />
    </div>
            
  );
};

export default Home;

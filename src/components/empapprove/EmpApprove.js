import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/Footer';
import AdminNav from '../header/AdminNav';
// import image from '../../assets/profile.png';
import './EmpApprove.css';
import empapprove from './EmpapproveDB'
const EmpApprove = () => {
  let navigate=useNavigate();
   
  const [employee,setEmployee]=useState([]);
  //const [isSubmit,setIsSubmit]=useState(false);
  //const [isSubmitedit,setIsSubmitedit]=useState(false);

  useEffect( async()=>{
    await fetchapi();
  },[])

  const fetchapi=async()=>{
      //const response = await fetch('http://localhost:5000/api/employee')
      const response=await axios.get('/api/employee')
      console.log(response.data);
      setEmployee(response.data)    
        
  }

  function approveEmpData(event){
     
     console.log(event.target.getAttribute("name"))
      axios.approve(`/main/api/approveemploye`, { id: event.target.getAttribute("name") })
            .then((res) => {
                alert("Successfully Approved");

                navigate("../declineemploye", { replace: true })

            }
            )
    
  }
  
  return (
    <div>
      <AdminNav />
   
      <div>
        <img className='empimage' src='https://wallpaperaccess.com/full/4321941.jpg' alt="" />
        <h3 style={{textAlign:'center'}}>PENDING LIST</h3>
        {empapprove.map((i)=>(
        <>
          <div className='alldetails'>
            <img src={i.image} className="image" alt="" />
              <div className='details'>
                <span style={{color:'darkcyan',fontWeight:'bold'}}>{i.empname}</span>
                <br></br>
                <span>{i.role}</span>
                <br></br>
                <span>{i.emailid}</span> 
              </div>
          </div>
          <div className='button'>
            <button onClick = {approveEmpData} className='approve'>{i.approve}</button>
            <button className='reject'>{i.reject}</button>
          </div>
        </>
        ))}
      </div>
      <br></br><br></br>
      {/* <Footer /> */}
    </div>
  )
}

export default EmpApprove;
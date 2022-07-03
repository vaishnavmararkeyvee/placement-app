import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminNav from '../header/AdminNav';
import './AllStudents.css';
import axios from 'axios';
// import StudentProfile from './student-profile';
import allstudents from './StudentDB';


const AllStudents = () => {
  const[students,setStudents]=useState([])

  let navigate=useNavigate();

  useEffect(async()=>{
   await fetchapi();
  },[]);

  const fetchapi=async()=>{      
    const response=await axios.get('/routes/api/students')
    console.log(response.data);
    setStudents(response.data)
  }

  function deleteStudData(id){
    console.log(id)
    axios.delete(`/routes/api/delete-stud/${id}`)
    .then((res)=>{
      console.log(res.data)
      alert("Successfully deleted")
      const allStudents=students.filter(i=>i._id !==id)
        setStudents(allStudents)
    
    })
  }

  return (
    <div>
      <AdminNav/>
      <div>
        <img className='empimage' src='https://www.mjcpa.com/wp-content/uploads/2021/05/b9602001-6766-44b9-9a33-b77f80c41eb4_eng-0303-communication-strategies-higher-education.jpg' alt="" />
        <h3 style={{textAlign:'center'}}>STUDENTS</h3>
        {students.map((i,key)=>(
        <>
          <div className='alldetails'>
            <img src={i.image} className="image" alt="" />
            <div className='details'>
              <span style={{color:'blue',fontWeight:'bold'}}>{i.name}</span>
              <br></br>
              <span>Student ID:{i.studid}</span>
              <br></br>
              <span>{i.email}</span> 
            </div>
          </div>
          <div className='button'>
            <Link key={key} to={`/stud-profile/${i._id}`}>
              <button className='showdetails'>SHOW DETAILS</button>
            </Link>
            <button className='delete'  onClick={()=>deleteStudData(i._id)}>DELETE</button>
          </div>
        </>
        ))}
      </div>
    </div>
  )
}

export default AllStudents;
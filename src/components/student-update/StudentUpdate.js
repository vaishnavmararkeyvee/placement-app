import React from 'react';
import studentupdate from './Studentdb';
import './StudentUpdate.css';
import StdUpdateform from './StdUpdateform';
import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios';

function StudentUpdate() {
  const[studUpdate,setStudUpdate]=useState([])


  useEffect(()=>{
    async function fetchData(){
      await fetchapi();
    }
    fetchData();
  },[]);

  const fetchapi=async()=>{      
      const response=await axios.get('/routes/api/students')
      console.log(response.data);
      setStudUpdate(response.data)
  }

  return (
    <div>
      <img className='stdimage' src='https://cdn.dribbble.com/users/2196582/screenshots/5103550/meeting_in_office..jpg' alt="cover" />
      <h3 style={{textAlign:'center'}}>Students</h3>
      {studUpdate.map((i,key)=>(
        <>
          <div className='alldetails'>
            <img src={i.image} className="image" alt="" />
            <div className='details'>
              <span>{i.name}</span>
              <br></br>
              <span>{i.studid}</span>
              <br></br>
              <span>{i.email}</span> 
            </div>
          </div>
          <div className='button'>
            <Link key={key} to={`/stud-updateform/${i._id}`}><button className='edit'>EDIT</button></Link>
            {/* <button className='delete'>{i.delete}</button> */}
          </div>
        </>
      ))}
    </div>
  )
}

export default StudentUpdate;
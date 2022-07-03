import React, { useEffect, useState } from 'react';
//import { useNavigate,useParams } from 'react-router-dom';
//import employeeupdate from './Employeedb';
import './EmployeeUpdate.css';
import EmpUpdateform from './EmpUpdateform';
import {Link,useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../header/AdminNav';

function EmployeeUpdate() {

  let navigate=useNavigate();

  const [employee,setEmployee]=useState([]);
  
  useEffect( async()=>{
    await fetchapi();
  },[])

  const fetchapi=async()=>{
      const response=await axios.get('/routes/api/employee')
      console.log(response.data);
      setEmployee(response.data)    
        
  }

  function deleteEmpData(id){
    console.log(id)
    axios.delete(`/routes/api/delete-emp/${id}`)
    .then((res)=>{
      console.log(res.data)
      alert("Successfully deleted")
      const allEmployee=employee.filter(i=>i._id !==id)
        setEmployee(allEmployee)
    
    })
  }

  return (
    <div>
      <AdminNav />
      <img className='empimage' src='https://www.cmarix.com/blog/wp-content/uploads/2021/12/Blog-01-6-1.jpg' alt="cover" />
      <h3 style={{textAlign:'center'}}>Employees</h3>
      {employee.map((i,key)=>(
        <>
          <div className='alldetails'>
            <img src={i.image} className="image" alt="" />
            <div className='details'>
              <span style={{fontWeight:'bold,',color:'blue'}}>{i.name}</span>
              <br></br>
              <span>{i.role}</span>
              <br></br>
              <span>{i.email}</span>
              <hr /> 
            </div>
          </div>
          <div className='button'>
            <Link key={key} to={`/emp-updateform/${i._id}`}><button className='edit'>EDIT</button></Link>
            <button className='delete'  onClick={()=>deleteEmpData(i._id)}>DELETE</button>
          </div>
        </>
     ))}
    </div>
  )
}

export default EmployeeUpdate;
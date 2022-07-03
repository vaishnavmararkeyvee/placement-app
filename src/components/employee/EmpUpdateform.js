
import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
//import employeeupdate from './Employeedb';
import './EmployeeUpdateform.css';
import axios from 'axios';
import AdminNav from '../header/AdminNav';


function EmpUpdateform(props) {

    const {id} =useParams();
    const navigate=useNavigate();

    const [employeeEdit,setemployeeEdit]=useState({name:'', role:'', email:''});
   

    const{name,role,email}=employeeEdit;

    useEffect(async()=>{
        await loadEmpData();
    },[])

    const loadEmpData=async()=>{
        const response=await axios.get(`/routes/api/employee/${id}`)
        setemployeeEdit(response.data);
    }

    const editData=async()=>{
        await axios.post(`/routes/api/edit-emp/${id}`, employeeEdit)
        .then((res)=>{
            alert ("successfully updated")
            navigate('../emp-update',{replace:true})
        })
        
    }

    const handleChange=(e)=>{
        console.log(e.target.value);
        setemployeeEdit({...employeeEdit,[e.target.name]:e.target.value})
        console.log(employeeEdit);

    }

    const handleSubmit=async(e)=>{
       await e.preventDefault();
    }

  return (
      <div>
          <AdminNav />
      
    <div className='empform'>
       
        <h3 style={{marginBottom:'15px',marginLeft:'30px',fontFamily:'sans-serif',fontWeight:'bold'}} >EDIT DETAILS</h3>
            
                <form onSubmit={handleSubmit} className='container1'>
                <input type="text" placeholder='empname' onChange={(e)=>handleChange(e)} name='name' value={name}/> <br /><br />
                <input type="text" placeholder='role'   onChange={(e)=>handleChange(e)} name='role' value={role}/> <br /><br />
                <input type="text" placeholder='emailid'   onChange={(e)=>handleChange(e)} name='email' value={email} /> <br /><br />
                
                <button className='update' onClick={editData}>Update</button> <br /><br />
                </form>
          
            
            
            
           
                </div>
    </div>
  )
}

export default EmpUpdateform;
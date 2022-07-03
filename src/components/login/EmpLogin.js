import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import Header from '../header/Header';
import './EmpLogin.css'; 
import Footer from '../footer/Footer';
import empvalidation from './empvalidation';
import { useEffect } from 'react';


const EmpLogin = (props) => {

  let navigate = useNavigate();
  
  const {name} =props;
  // storing Form field values
  const[userData,setUserData] = useState({});

  //manage the form error values
  const [errorvalues,setErrorvalues]=useState({});

  //flag for form submission status
  const [issubmit,setIssubmit]=useState(false);
  
  const[registers,setRegisters]=useState([]);

  // manage field change
  const handleChange=(event)=>{
    setUserData({...userData,[event.target.name]:event.target.value});
    console.log(userData);
  }
  
  // manage form refresh,backend connection
  const handleSubmit = async(e) =>{
    e.preventDefault();
    setErrorvalues(empvalidation(userData));
  };
  
  const fetchLogin=async()=>{
    await axios.post("/auth/employeelogin",{data:userData})
    .then(
      response=>{    
        if(response.data.token) Cookies.set('employeekey',response.data.token);      
        // console.log(response.data.token)
      }
    );
    registers.map((i,key)=>{
      if((i.email === userData.email) && (i.password === userData.password) ){
        setIssubmit(true);
      }
    })
  }
   
  useEffect(()=>{
    if(Object.keys(errorvalues).length===0 && issubmit){

       alert("login successfully");
    }
  },[errorvalues]);

  return (
    <div>
      <Header />
      {Object.keys(errorvalues).length===0 && issubmit ? navigate("/emphome") : <p></p>}
      <div className='background' style={{backgroundColor:'black',height:'100%'}}>
        <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGVzaWduZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="cover" />
        <div className='form'>
          
          <form action="" className="container" onSubmit={handleSubmit}>
            <h4 style={{marginBottom:13,color:'white',textAlign:'center'}}>EMPOLOYEE LOGIN</h4>
            {/* <label className='loglab' style={{color:'black',textAlign:'none'}} for="email"><b></b></label> */}
            <input style={{width:260}} className='loginp' type="email" placeholder="Enter Email" name="email" onChange={handleChange} value={userData.email} required="email"/>
            <p>{errorvalues.email}</p>
            <br></br>
            {/* <label className='loglab' for="psw"><b></b></label> */}
            <input style={{width:260}} className='loginp' type="password" placeholder="Enter Password" name="password" onChange={handleChange} value={userData.password} required/>
            <p>{errorvalues.password}</p>
            <br></br>
            <button onClick={fetchLogin} type="submit" className="btn1">Login</button>
          </form>
        
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EmpLogin;
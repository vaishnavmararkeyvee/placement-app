import {Grid,Avatar, Paper, TextField} from "@mui/material";
import React from "react";
import './StudentLogin.css';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Button } from "@mui/material";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import studvalidation from "./studvalidation";

const StudentLogin=(props)=>{
    
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
    setErrorvalues(studvalidation(userData));
  };
  
  const fetchLogin=async()=>{
    await axios.post("/auth/studentlogin",{data:userData})
    .then(
      response=>{    
        if(response.data.token) Cookies.set('studentkey',response.data.token);      
        // console.log(response.data.token)
        // navigate("/studhome")
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

    return(
        <div>
             <Header />
            {Object.keys(errorvalues).length===0 && issubmit ? navigate("/studhome") : <p></p>}
            <div className="studentsignin" >
                <form action="" onSubmit={handleSubmit}>
                    <Grid>
                        <Paper className="paperstyle" elevation={10} >
                            <Grid align='center'>
                                <Avatar id='icon'><ImportContactsIcon></ImportContactsIcon></Avatar>
                                <h1>Student Login</h1>   
                            </Grid>
                            <div id="studentlabel">
                                <TextField  label='email' placeholder="EMAIL ID" type='email' fullWidth  name="email" onChange={handleChange} value={userData.email} required></TextField>
                            </div>
                            <div id="studentlabel">
                                <TextField  label='Password' placeholder=" PASSWORD" type='password' fullWidth name="password" onChange={handleChange} value={userData.password} required></TextField>
                            </div>
                            <div className="studentbutton">
                                <button id="buttonstyle" type="submit" onClick={fetchLogin}>LOGIN </button>
                            </div>
                            <div id="studentlabel">
                                {/* <p>Don't have an account <a href="/studentenroll">SignUp</a></p> */}
                            </div>
                        </Paper>
                    </Grid>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default StudentLogin;
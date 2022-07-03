import * as React from 'react';
import Box from '@mui/material/Box';
import './StudentProfile.css'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img from '../../assets/robot.jpg';
import image from '../../assets/image.jpg';
import {Link, useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { typography } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AdminNav from '../header/AdminNav';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StudentProfile() {

  // const[data,setData]=useState([]);
  // const {id}=useParams

  // useEffect(() => {
  //   async function fetchData(){
  //     await loadData();
  //   }
  //   fetchData();
  // }, []);

  // const loadData=async()=>{
  //   const response=await axios.get(`http://localhost:5000/Router/api/students/${id}`)
  //   .then((response)=>{
  //     setData(data=response.data.find(i=>i._id===id));
  //     console.log(data.content)
  //   })
    //console.log(response.data);
    //setData(response.data)
  // }

   return ( 
     <div>
       <AdminNav />
       <div>
         <img src={img} alt='' className='studimg1'/>
          {/* <Box className='heading1'><h1 style={{color:'violet'}}>STUDENT DETAILS</h1></Box> */}
          <div className='profile' >
            <>
              {/* {data.map((i,key)=>{ */}
              <Box id='box'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={2}>
                    <Item>
                      <img src={""} alt='imge' style={{width:'10em',height:'10em',borderRadius:'12em',padding:'2em'}}/>
                      <div id='contact'>
                        <p>Student Id:</p>
                        <p>Name:</p>
                        <p>email:</p>
                        <p>Phone:</p>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={8}>
                    <Item >
                      <div id='item1'>
                        {/* <Link to={``}><button id='update'>Update</button></Link> */}
                        <p id='GI'>General Information</p>
                        <hr/>
                        <hr/>
                      </div>
                      <div id='content'>
                        <div id='left'>Address</div>
                        <div>:</div>
                        <div></div>
                        <div id='left'>Qualification</div>
                        <div>:</div>
                        <div></div>
                        <div id='left'>Passout year</div>
                        <div>:</div>
                        <div></div>
                        <div id='left'>Technology Training</div>
                        <div>:</div>
                        <div></div>
                        <div id='left'>Skills</div>
                        <div>:</div>
                        <div></div>
                        <div id='left'></div>
                        <div>:</div>
                        <div></div>
                        <div id='left'>Course</div>
                        <div>:</div>
                        <div></div>
                      </div>
                    </Item>
                    <br/>
                    <Item >
                      <div id='item1'>
                        <p id='GI'>Academics</p>
                        <hr/>
                        <hr/>
                      </div>
                      <div id='content'>
                        <div id='left'>Exit-exam Mark</div>
                        <div>:</div>
                        <div></div>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            })
            } 
          </>
        </div>
      </div>
    </div>
  );
}









    







    



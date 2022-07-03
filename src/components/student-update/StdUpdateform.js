import React,{useState,useEffect} from 'react';
import { useParams,useNavigate  } from 'react-router-dom';
import studentupdate from './Studentdb';
import './StdUpdateform.css';
import axios from 'axios';

function StdUpdateform(props) {

  const {id} =useParams();
  const navigate=useNavigate();

  const [studentEdit,setStudentEdit]=useState({
    name:"",
    email:"",
    phonenumber:"",
    address:"",
    qualification:"",
    passout:"",
    skillset:"",
    employmentStatus:"",
    technologyTraining:"",
    course:"",
    year:"",
    payment:"",
    mark:"",
    studid:"",
    image:""});
 

  const{name,email,phonenumber,address,qualification,passout,skillset,employmentStatus,technologyTraining,course,year,mark,studid,image}=studentEdit;

  useEffect(()=>{
    async function fetchData(){
      await loadStudData();
    }
    fetchData();
  },[])

  const loadStudData=async()=>{
      const response=await axios.get(`/routes/api/students/${id}`)
      setStudentEdit(response.data);
  }

  //edit student data
  const editData=async()=>{
      await axios.post(`/routes/api/edit-stud/${id}`, studentEdit)
      .then((res)=>{
          alert ("successfully updated")
          navigate('../students',{replace:true})
      })
  }

  const handleChange=(e)=>{
      console.log(e.target.value);
      setStudentEdit({...studentEdit,[e.target.name]:e.target.value})
      console.log(studentEdit);

  }

  const handleSubmit=async(e)=>{
     await e.preventDefault();
  }
  return (
    <div className='stdform'>
      <h1 style={{marginBottom:'15px',fontFamily:'sans-serif',fontWeight:'bold'}} >Edit Details</h1>
        
      <form onSubmit={handleSubmit} className='container1'>
        <input type="text" placeholder='Student name' onChange={(e)=>handleChange(e)} name='name' value={name}/> <br /><br />
        <input type="text" placeholder='Emailid' onChange={(e)=>handleChange(e)} name='email' value={email}/> <br /><br />
        <input type="text" placeholder='Phone' onChange={(e)=>handleChange(e)} name='phonenumber' value={phonenumber}/> <br /><br />
        <input type="text" placeholder='Address' onChange={(e)=>handleChange(e)} name='address' value={address}/> <br /><br />
        <input type="text" placeholder='Qualification' onChange={(e)=>handleChange(e)} name='qualification' value={qualification}/> <br /><br />
        <input type="text" placeholder='PassoutYear' onChange={(e)=>handleChange(e)} name='passout' value={passout}/> <br /><br />
        <input type="text" placeholder='Skillset' onChange={(e)=>handleChange(e)} name='skillset' value={skillset}/> <br /><br />
        <input type="text" placeholder='Employment Status' onChange={(e)=>handleChange(e)} name='employmentStatus' value={employmentStatus}/> <br /><br />
        <input type="text" placeholder='Technology Training' onChange={(e)=>handleChange(e)} name='technologyTraining' value={technologyTraining}/> <br /><br />
        <input type="text" placeholder='Year' onChange={(e)=>handleChange(e)} name='year' value={year}/> <br /><br />
        <input type="text" placeholder='Course' onChange={(e)=>handleChange(e)} name='course' value={course}/> <br /><br />
        <input type="text" placeholder='Mark' onChange={(e)=>handleChange(e)} name='mark' value={mark}/> <br /><br />
        {/* <input type="text" placeholder='Studid' onChange={(e)=>handleChange(e)} name='studid' value={studid}/> <br /><br /> */}
        <input type="file" placeholder='Image' onChange={(e)=>handleChange(e)} name='image' value={image}/> <br /><br />

        <button className='update' onClick={editData}>Update</button> <br /><br />
      </form>
    </div>
  )
}

export default StdUpdateform;
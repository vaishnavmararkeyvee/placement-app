import React, { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './AdminLogin.css';
import adminvalidation from './adminvalidation';
import Cookies from 'js-cookie';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function AdminLogin(props) {

	let navigate = useNavigate();

    // storing Form field values
    const[formValues,setFormValues] = useState({username:"",password:""})
	
	//manage the form error values
	const[formErrorValues,setFormErrorValues] = useState({})

	//flag for form submission status
	const[isSubmit,setIsSubmit] = useState(false)

	// manage field change
	const handleChange= (event)=>{
    	const{name,value} = event.target;  //destructuring
		setFormValues({...formValues,[name]:value}) 
		// console.log(formValues);
    }

	// manage form refresh,backend connection
	const handleSubmit =async (event)=>{
		event.preventDefault();
		setFormErrorValues(adminvalidation(formValues));
	    setIsSubmit(true) ;
        await axios.post("/auth/adminlogin",{data:formValues})
        .then(
            response=>{    
                if(response.data.accessToken) Cookies.set(process.env.SECRET_KEY,response.data.accessToken);      
                console.log(response.data.token)
			}
		);
	}

	return(
    	<div>
			<Header />
			<div className="main1">  	
				{Object.keys(formErrorValues).length===0 && isSubmit ? navigate("/admin") : <p></p>}
				<div className="signup1">
					<form onSubmit={handleSubmit} >
						<label className='label1' >ADMIN LOGIN</label>
          				<br></br><br></br>
						<input className='field1' type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange} />
          				<p className="error1">{formErrorValues.username}</p>
				  		<br></br>
          				<input className='field1' type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
        				<p className="error1">{formErrorValues.password}</p>
						<br></br>
          				<button  className='button1'>LOGIN</button>
					</form>
				</div>
      		</div>
			<br></br><br></br>
			<Footer />
    	</div>
  	)
}

export default AdminLogin;
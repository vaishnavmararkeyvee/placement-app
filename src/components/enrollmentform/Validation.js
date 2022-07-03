function validation(formValues){
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    
     if(!formValues.name) {
         errors.name = "Name is required";
     }
       if(!formValues.email){
           errors.email = "Email is required";
       }
       
    
     else if(!regex.test(formValues.email)){
        errors.email = "Email is invalid";
     }
     if(!formValues.password){
        errors.password = "Password is required";
    }
    else if(formValues.password.length<5){
        errors.password = "Password is too short";
    }
     if(!formValues.phonenumber){
         errors.phonenumber = "Phone number is required"
     }
     if(!formValues.address){
        errors.address = "Address is required"
    }
    if(!formValues.qualification){
        errors.qualification = "Qualification is required"
    }
    if(!formValues.passout){
        errors.passout = "Passout year is required"
    }
    if(!formValues.skillset){
        errors.skillset = "Skillset is required"
    }
    if(!formValues.employmentStatus){
        errors.employmentStatus = "Employment status is required"
    }
    if(!formValues.technologyTraining){
        errors.technologyTraining = "technology training is required"
    }
    if(!formValues.year){
        errors.year = "year is required"
    }
    if(!formValues.course){
        errors.course = "course is required"
    }
    if(!formValues.payment){
        errors.payment = "fee is required"
    }
    if(!formValues.image){
        errors.image = "photo is required"
    }
       return errors;
    }

    export default validation;
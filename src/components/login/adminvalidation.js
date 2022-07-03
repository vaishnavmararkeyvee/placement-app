function adminvalidation(formValues){
    const errors = {};
   

    if(!formValues.username){
        errors.username = "Username is required";
    }
   else if(formValues.username!=="Admin"){
       errors.username="admin invalid";
   }
    if(!formValues.password){
        errors.password = "Password is required";
    }
    else if(formValues.password!=="admin123"){
        errors.password = "Password is invalid";
    }
    return errors;
}
export default adminvalidation;
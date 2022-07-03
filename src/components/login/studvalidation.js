function studvalidation(userData){
    const errors={};
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   
    if(!userData.email){
       errors.email="email required";
   }
   else if(!regex.test(userData.email)){
       errors.email="email is invalid";
   }
   if(!userData.password){
      errors.password="password is required";
   }

   return errors;

}
export default studvalidation;
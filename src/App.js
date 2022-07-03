import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Courses from "./components/courses/Courses";
import Login from "./components/login/EmpLogin";
import Home from "./components/home/Home";
import Studentenroll from "./components/enrollmentform/Studentenroll";
import EmpApprove from "./components/empapprove/EmpApprove";
import AllStudents from "./components/student/AllStudents";
import Employenroll from "./components/enrollmentform/Employenroll";
import EmployeeUpdate from './components/employee/EmployeeUpdate';
import EmpUpdateform from './components/employee/EmpUpdateform';
import StudentProfile from "./components/student/StudentProfile";
import SimpleContainer from "./components/searchpage/SearchPage";
import StdUpdateform from "./components/student-update/StdUpdateform";
import StudentUpdate from "./components/student-update/StudentUpdate";
import AdminHome from "./components/home/AdminHome";
import AdminLogin from "./components/login/AdminLogin";
import EmpLogin from './components/login/EmpLogin';
import EmpHome from "./components/home/EmpHome";
import StudHome from "./components/home/StudHome";
import StudentLogin from "./components/login/StudentLogin";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path = '/'  element={<Home/>} exact/>
          <Route path = "/courses" element={<Courses/>} />
          <Route path = '/login' element={<Login />} />
          <Route path = '/students' element={<AllStudents />} />
          <Route path = "/stud-profile/:id" element={<StudentProfile />}  />
          <Route path = "/empapprove" element={<EmpApprove />} />
          <Route path = "/studentenroll" element={<Studentenroll/>} />
          <Route path = '/studentlogin' element={<StudentLogin />} />
          <Route path = "/employenroll" element={<Employenroll/>} />
          <Route path = "/employeelogin" element={<EmpLogin/>} />
          <Route path = "/emp-update" element={<EmployeeUpdate />} />
          <Route path = "/emphome" element={<EmpHome />} />
          <Route path = "/studhome" element={<StudHome />} />
          <Route path = "/emp-updateform/:id" element={<EmpUpdateform />} />
          <Route path = "/search" element={<SimpleContainer />} />
          <Route path = "/stud-update" element={<StudentUpdate />} /> 
          <Route path = "/stud-updateform/:id" element={<StdUpdateform />} /> 
          <Route path = "/admin" element={<AdminHome />} /> 
          <Route path = "/adminlogin" element={<AdminLogin />} /> 
         
        </Routes>
        
      </div>
      
    </Router>
  );
}

export default App;

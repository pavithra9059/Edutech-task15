import { useState }
from "react";

import axios from "axios";

function StudentForm() {

 const [student,setStudent] =
 useState({
   name:"",
   email:"",
   course:""
 });

 const handleChange =
 (e) => {

   setStudent({
     ...student,
     [e.target.name]:
     e.target.value
   });
 };

 const handleSubmit =
 async (e) => {

   e.preventDefault();

   await axios.post(
   "http://localhost:5000/api/students",
   student
   );

   alert(
   "Student Added"
   );

   window.location.reload();
 };

 return (

 <form
 onSubmit={handleSubmit}
 >

 <input
 name="name"
 placeholder="Name"
 onChange={handleChange}
 />

 <input
 name="email"
 placeholder="Email"
 onChange={handleChange}
 />

 <input
 name="course"
 placeholder="Course"
 onChange={handleChange}
 />

 <button>
 Add Student
 </button>

 </form>

 );
}

export default StudentForm;

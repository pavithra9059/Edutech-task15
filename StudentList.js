import {
 useEffect,
 useState
}
from "react";

import axios
from "axios";

function StudentList() {

 const [students,
 setStudents]
 =
 useState([]);

 useEffect(() => {

 axios.get(
 "http://localhost:5000/api/students"
 )
 .then((res)=>{

 setStudents(
 res.data
 );

 });

 }, []);

 return (

 <div>

 <h2>
 Student List
 </h2>

 {
 students.map(
 student => (

 <div
 key={student._id}
 >

 <h4>
 {student.name}
 </h4>

 <p>
 {student.email}
 </p>

 <p>
 {student.course}
 </p>

 </div>

 ))
 }

 </div>

 );
}

export default StudentList;
}

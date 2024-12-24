import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Component1 from './lec2412/componenet'
// import InputTest from './lec2412/component3'
import Timetable from './lec2412/timetable_6th_sem'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div>
    <h1>
   Hello World !!!!
   </h1>
   </div>
<h4>
   this my first react project , thank you !!
   </h4>
   
   <table border="2px"  >
     <tr>
       <td>Name</td>
       <td>Hemanshi</td>
     </tr>
     <tr>
       <td>Email</td>
       <td>hemanshi@gmail.com</td>
     </tr>
     <tr>
       <td>Phone</td>
       <td>9876543210</td>
     </tr>
     <tr>
       <td>Age</td>
       <td>20</td>
     </tr>
   </table> */}
   {/* <Component1></Component1> */}
<Timetable></Timetable>
  </StrictMode>,
)

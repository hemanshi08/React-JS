import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import State3 from './stateManagement/stateManagement3'
// import MyComponent from './lec3112/combined'
// import PureFunc from './lec3112/pureFunc'
// import MyButton3 from './lec3112/pureFunc2'
import FuncComnp1 from './lec3112/hookComp1'
import StateExample from './lec6-1/hookexamp'
import StateExample2 from './lec6-1/hookexmp2'
import StateExample3 from './lec6-1/hookexamp3'
// import Component1 from './lec2412/componenet'
// import InputTest from './lec2412/component3'
// import Timetable from './lec2412/timetable_6th_sem'
// import State1 from './stateManagement/stateManagement'
// import State2 from './stateManagement/stateManagement2'


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

{/* <Timetable></Timetable> */}

{/* <State3></State3> */}

{/* <MyComponent></MyComponent>   */}

{/* <PureFunc abc = {true} xyz = {"Hello "}/>
<br/>
<br/>
<PureFunc abc = {false} xyz = {"Hemanshi"}/> */}

{/* <MyButton3 ></MyButton3>
<br/>
<br/>
<MyButton3 abc ={true} def={"hello"}></MyButton3> */}

{/* <FuncComnp1></FuncComnp1> */}

{/* <StateExample></StateExample> */}
{/* <StateExample2></StateExample2> */}
<StateExample3></StateExample3>
</StrictMode>,
)

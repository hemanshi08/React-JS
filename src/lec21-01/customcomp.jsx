import { useState } from "react";
import UserComponent1 from "./cleanup";

const ShowHideUser = ({xyz})=>(xyz ? <UserComponent1/>:null);

function Conditional () {
    const [show , setShow] = useState(false);
    return (
        <div>
            <button onClick={()=> setShow(!show)}>{show ? "Hide User" : "Show User"}</button>
            <ShowHideUser xyz={show}/>  
        </div>);
}
export default Conditional;
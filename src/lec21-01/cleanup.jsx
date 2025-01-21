// when we close the chat box of facebook and inasta after that we reopen that then contains will load it call cleanup and reload 

import {useEffect, useState} from "react";
import {Promise} from "bluebird";

function fetchuserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id: 20 , name: "Hemanshi"});
        }, 3000);
    });
}
function UserComponent1 (){
const [id , setId] = useState("Loading..");
const [name, setName] = useState("Loading..");

useEffect (()=>{
    const Promise = fetchuserData().then((user)=>{
        setId(user.id);
        setName(user.name);
    });
        return () => { Promise.cancel();
};
});

return (
    <div>
        Id : {id}<br />
        Name : {name}
    </div>);
}
export default UserComponent1;
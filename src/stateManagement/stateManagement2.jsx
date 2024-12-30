import * as React from 'react';

class State2 extends React.Component {
state = {
    first : true,
    second : 123,
    third : "hemanshi",
    forth :"red" ,
    fifth :"yellow",
};
constructor(){
    super();
    setTimeout(() => {
        this.setState ({
            first : false,
            second : 456,
            third :"Hemanshi Garnara",
            forth :"purple",
            fifth :"pink",
        });
    },100 );
}
render(){
    const {first, second, third,forth,fifth} = this.state;
    return(

        <div>
<button disabled = {first} > My Button </button>            
<p style={{color:forth}}> value of second  variable is <strong>{second}</strong></p>
<p style={{color:fifth}}>vlaue of thired variable is <strong>{third}</strong></p>
        </div>
    );
}
}
export default State2 ;
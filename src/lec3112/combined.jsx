import * as React from "react";
import MyButton from "./mybtn";
import MyList from "./mylist";

class MyComponent extends React.Component {
state = 
{
    abc:"My Button",
    xyz: true,
    items: ["a", "b", "c", "d"],


}
render() {
    const {abc,xyz,items} = this.state;
    return (
        <div>
            <MyButton abc ={abc} xyz={xyz}/>
            
            <MyList items={items}/>
        </div>
    )
}
}
export default MyComponent;
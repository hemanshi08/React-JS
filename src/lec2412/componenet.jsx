import * as React from "react";

class Component2 extends React.Component { 
    render() {
        return ( <div>
        <h1>component2</h1>
        <h2>World</h2>
        </div>
        );
    }
    }
class Component1 extends React.Component { 
render() {
    return ( <div>
    <h1>component1</h1>
    <h2>hello</h2>
    <Component2></Component2>
    </div>
    );
}
}

export default Component1;
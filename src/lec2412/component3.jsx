import * as React from "react";
class InputTest extends React.Component {
    render() {
        return (
            <div >
                <input type="text" placeholder="enter your name:" /><br /><br/>
                <label>Enter your gender:</label>
                <input type="radio" name="gender" value="male" /> Male  
                <input type="radio" name="gender" value="female" /> Female <br/><br/>
                <input type="color" />Choose your favorite color <br/><br/>
                <input type="file" /><br/><br/>
                <input type="checkbox"/> <label>checkbox</label> <br/><br/>
                <input type ="button" value="Submit" /> 
            </div>
        );
    }
}
export default InputTest;
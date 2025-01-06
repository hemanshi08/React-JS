import {useState} from "react";
function StateExample3 () {
    const [color , setColor] = useState("green");
    const [FontStyle , setFontStyle] = useState("normal");

    // when page loaded first time by default radio button is green
    return (
        <div>
            <h1>Select Color:</h1>
           
        <input type="radio" name="Color" value="Red" onChange={()=>setColor("red")}></input> 
        {"red"}
<br/>
<input type="radio" name ="Color" value="yellow" onChange={()=>setColor("yellow")}></input>
{"yellow"}
<br/>
<input type="radio" name ="Color" value="black" onChange={()=>setColor("black")}></input>
{"black"}
<h1>Select Font Style:</h1>
<input type="radio" name="FontStyle" value="italic" onChange={()=>setFontStyle("italic")}></input>   
{"italic"}   
<br/>
<input type="radio" name="FontStyle" value="oblique" onChange={()=>setFontStyle("oblique")}></input>   
{"oblique"}     
        <h1>Output:</h1>
        <p style={{color : color , fontStyle : FontStyle}}>hello , you select {color} color and {FontStyle} fontStyle</p>

</div>
    );
}
export default StateExample3;
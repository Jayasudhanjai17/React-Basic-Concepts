import React from "react";
import '../temp.css'
const Toggle = function (){
    let dar=true;
const Darkmode=<h1 className="drk">Dark mode  is On</h1>
const Lightmode =<h2 className="lyt">Light mode is On</h2>
function color(){
    dar=!dar;
    if(dar==true){
console.log("Dark");
    }
    else{
        console.log('Light');
    }
}
    return(
        <div>
{dar?Darkmode:Lightmode}
<button onClick={color}>Click</button>
</div>
    );
}
export default Toggle;
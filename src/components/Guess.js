import React from "react";
 const Guess = function(){
    let cg =<h1 style={{ backgroundColor: 'green',color:'orange' }}>Correct Guess</h1>;
    let wg=<h1 style={{ backgroundColor: 'Red' ,color:'white' }}>Wrong guess</h1>
    const [state ,setState] = React.useState(false);
    const [secstate,setSecstate]=React.useState(false);
    let flag=false;
    function guess(){
      setSecstate(prev => true);
    let  randomNumber=Math.floor((Math.random()*3)+1);
    console.log(randomNumber);
    let userInput = prompt("Guess the Nmuber ");
    alert(`Random Num:[${randomNumber}]:Guess Value ${userInput}`);
   //flag= randomNumber===userInput?true:false;
    
   if(randomNumber==userInput){
      setState(prev => !prev);
      console.log("hhh")
   }
   console.log(userInput);
    return flag;
    }

    return(
       <div>
        <h1>Guess the Number</h1>
        { secstate? <div>{state?cg:wg}</div> : <div></div>}
        <button onClick={guess}>Guess</button>
       </div>
      
    );

    
 };
 export default Guess;
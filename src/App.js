import logo from './logo.svg';
import Head from './components/Functional.js'
import './App.css';
import './temp.css'
import Toggle from './components/Toggle';
// import  Btn from './components/btn.js'
import Btn from './components/btn'
import Guess  from './components/Guess';
import ClassCom from './components/ClassCom';

function App() {
  return (
    <div className="parent" style={{color:"red"}}>

 <div className='Player1'>
<h1 number='0'>Points </h1>
<Btn number='6'> Click</Btn>
 </div>
 <div className='Player2'>
 <Toggle></Toggle>
<Btn number='6'> Click</Btn>
 </div>

 <Guess></Guess>
 <ClassCom></ClassCom>
 
  </div>
  )
  ;

}

export default App;

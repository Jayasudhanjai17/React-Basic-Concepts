import React,{Component} from 'react';
class ClassCom extends Component{

constructor(){
    // let clascomp=<p> The Class Component  Needs this key word and State has this.state() and this.setState() method </p>;
    super();
    this.state={
        message:'Class Component'
    };
}
Compo (){
    let clascomp=<p> The Class Component  Needs this key word and State has this.state() and this.setState() method </p>;
    this.setState({
        
        message:clascomp
    })
}


    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.Compo()}>
                The function of class Component
            </button>

        </div>
        );
    }
    ;
}
export default ClassCom;
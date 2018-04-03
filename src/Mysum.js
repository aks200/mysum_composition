//My Additon App
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Mysum extends Component{
    constructor(props){
        super(props);
        this.add1 = this.add1.bind(this);
        //this.settingState = this.settingState.bind(this);
        this.state = {t1:0,t2:0};
    }

    /*settingState=(event)=>{
        this.setState({t1:event.target.value,t2:event.target.value});
    }*/
    
    add1 = () => { 
        let res=parseInt(this.state.t1)+parseInt(this.state.t2);
        alert(res);
    }
    render()  {
        let t1=this.state.t1;
        let t2=this.state.t2;
        return(
        <html>
            <label>
                No 1...
                <input type="text" name={t1} 
                onChange={(event)=>this.setState({t1:event.target.value})}/>
                <br/>
                No 2...
                <input type="text" name={t2} 
                onChange={(event)=>this.setState({t2:event.target.value})}/>
            </label>
                <br/>
            <input type="button"  value="ADD" onClick={this.add1}/>
        </html>
        );
    }
}

export default Mysum;

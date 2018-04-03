 //MyCompostion
import logo from "./logo.svg";
import React, { Component } from 'react';
import "./App.css";

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

function Dialog(props){
    return(
    <FancyBorder color="blue-violet">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <h3 className="Dialog-message">
                {props.message}
            </h3>
                {props.children}
    </FancyBorder>

    );
}
class Compo extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state={t1:''};
    }

    handleChange(e){
        this.setState({t1:e.target.value});
        }

    handleSignUp(){
        alert(`${this.state.t1},has successfully login`)
    }
    render(){
        let t1=this.state.t1;
        return(
            <html>
            <img src={logo} className="App-logo" alt="logo"/>
            <Dialog title="WELCOME" message="Enter Name:">

            <label>
           
                <input type="text" name={this.state.t1} onChange={this.handleChange}/>
                <input type="submit" value="submit" onClick={this.handleSignUp}/>
            </label>    

            </Dialog>
            </html>
        );
    }
}


export default Compo;
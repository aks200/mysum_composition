//Example for reference
import logo from "./logo.svg";
import React, { Component } from 'react';

class Form1 extends Component{

    constructor(){
        super();
        this.textAge = React.createRef();
        this.state=({fname:'',lname:''});
        //this.handleSubmit=this.handleSubmit.bind(this);
     }

    textInput=Element=>{
        this.lname=Element;
    };

    onKeyUp=(event)=>{
        if(event.keyCode == 13){
            this.lname.focus();
        }  
    };


    handleSubmit=()=>{
        if(this.fname.value == ''|| this.lname.value == ''
        || this.textAge.current.value =='')
        {
            alert("please fill the fields");
            this.fname.focus();
        } 
        else{
            alert(`FIRST NAME IS....${this.fname.value}`);
            alert(`LAST NAME IS....${this.lname.value}`);
            alert(`AGE IS....${this.textAge.current.value}`);
        }
    };
   

    handleCancel=()=>{
        this.fname.value='';
        this.lname.value='';
        this.textAge.current.value='';
        this.fname.focus();
    };

    render(){
        let fname=this.state.fname;
        let lname=this.state.lname;
        return(
        <html>
        <img src={logo} className="App-logo" alt="logo"/>
        <table>
                <tr>
                    <td>First Name</td>
                    <td><input type="text"
                    ref={(input)=>this.fname = input} onKeyUp={this.onKeyUp}/></td>
                </tr>

                 <tr>
                    <td>Last Name</td>
                    <td><input type="text"
                    ref={this.textInput}/></td>
                </tr>

                 <tr>
                    <td>Age</td>
                    <td><input type="text"
                    ref={this.textAge}/></td>
                </tr>

                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td><input type="submit" name="submit" onClick={this.handleSubmit}/></td>
                    <td><input type="button" name="cancel" value="cancel" onClick={this.handleCancel}/></td>
                </tr>
        </table>
        </html>
        );
    }
}

export default Form1;

//we can also write all function inside with 'this.' 
//If we write arrow function we don't need to bind in constructor
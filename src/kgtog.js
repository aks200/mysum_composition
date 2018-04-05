//My conversion app
import logo from "./logo.svg";
import React, { Component } from 'react';

class Calc extends Component{

    constructor(){
        super();
        this.state={kg:0,g:0};
    }
    render(){
        let kg=this.state.kg;
        let g=this.state.g;
        return(
            <html>
                <img src={logo} className="App-logo" alt="logo"/>
                <table>
                    <label>
                        <tr>
                            <td>Enter Kilogram:</td>
                            <td><input type="text" name={this.state.kg}
                            onChange={(event)=>this.setState({kg:event.target.value})}/></td>
                        </tr>

                        <tr>
                            <td>Enter Grams</td>
                            <td><input type="text" name={this.state.g}
                            onChange={(event)=>this.setState({kg:event.target.value})}/></td>
                        </tr>
                    </label>
                </table>

             
            </html>
        );
    }
}

export default Calc;
import React,{Fragments,Component} from "react";

class Mysum extends Component{
    /*let t1,t2;
    function add1(t1,t2){
        alert(t1);
        alert(t2);

    }*/
    render(){
        return(
        <html>
            <label>
                No1...
                <input type="text" name="txt1"/>
                <br/>
                No2...
                <input type="text" name="txt2"/>
            </label>
                <br/>
            <input type="button" name="add" value="add" onClick={add1(txt1.value,txt2.value)}/>
        </html>
        );
    }
}

export default Mysum;

import React,{Component} from "react";
import Button from "react-bootstrap";

function ThreeButton(props){
    return(
        <div className="buttonSpace">
        <div className="buttonStyle" >
            <p className="buttonTitle">{props.name}</p>
       <Button className={props.class} size={props.size}>Default</Button>
        </div>
        </div>
    )
}

export default ThreeButton;
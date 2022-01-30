import React,{Component} from "react";

function SingleButton(props){
    return(
        <div className="buttonSpace">
        <div className="buttonStyle" >
            <p className="buttonTitle">{props.name}</p>
        <button className={props.class}> {props.icon}  {props.title}  {props.iconOne}</button>
        </div>
        </div>
    )
}

export default SingleButton;
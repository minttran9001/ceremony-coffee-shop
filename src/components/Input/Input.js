import React from "react";
import "./Input.scss";

export default function Input(props) {
  const [input,setInput] = React.useState('input')
  return (
    <div style={props.inputFor=='register' ? {width:200} : {width:170}} className="inputGroup">
     
      <input onFocus={()=>{setInput('input onFocus')}} className={input} name={props.content} type={props.type} />
      <div className="line"></div>
       <div className="inputLabel" htmlFor={props.content}>
        {props.content}
      </div>
    </div>
  );
}

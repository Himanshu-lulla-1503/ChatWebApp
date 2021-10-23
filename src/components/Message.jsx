import React from 'react';
import './Message.css'
const Message=({message:{user,text},name})=>{
    
    const username = name.trim();
    let curuser=false;
    if(username===user){
        curuser=true;
    }
    return(
        <div className="message mx-1 my-1 d-flex flex-column endmessage">
        {curuser?<div className="ml-auto w-50">
        <p className="usermessage"><span className="font-weight-bolder text-dark text-capitalize">{user} : </span>{text}</p>
        </div>:
        <div className="mr-auto w-50 ">
        <p className="othermessage"><span className="font-weight-bolder text-dark text-capitalize">{user} : </span>{text}</p>
        </div>}

        </div>
       
    )

}
export default Message;
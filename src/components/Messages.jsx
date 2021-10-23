import React from 'react';
import Message from './Message';
import ScrollToBottom  from 'react-scroll-to-bottom';

const Messages=(props)=>{
    return(
        <ScrollToBottom className="scroller">
        <div className="outerdivmessages">
        {props.messages.map((curele,i)=><div key={i}><Message message={curele} name={props.name}/></div>)}
        </div>
        </ScrollToBottom>
    )

}

export default Messages;
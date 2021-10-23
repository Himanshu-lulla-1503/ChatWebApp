import React from 'react';



const ChatRoomTitle=({room,users})=>{
    return(
        
        <div className="headercontainer d-flex justify-content-between ">
        {users.length!==0 ?
        <div className="dropdown">
            <a href="#" data-toggle="dropdown"><i className="fa fa-circle" aria-hidden="true" style={{'color':'#A0D02C', 'padding':'10px'}}></i></a>
            <div className="dropdown-menu">
                    {users.map((curele,i)=><div key={i} className="dropdown-item text-capitalize"><i className="fa fa-circle" aria-hidden="true" style={{'color':'#A0D02C', 'padding':'2px'}}></i> {curele}</div>)}
            </div>
        </div>
        :<i className="fa fa-circle" aria-hidden="true" style={{'color':'#A0D02C', 'padding':'10px'}}></i>}
        
              <h1 className="display-4 text-center text-light text-capitalize font-weight-light" >{room}</h1>
              <a href="/" alt="close icon"  className="closeicon" style={{'color':'#15892A', 'padding':'5px'}}> <i class="fa fa-2x fa-times" aria-hidden="true"></i></a>
        </div>

    )

}
export default ChatRoomTitle;
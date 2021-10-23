import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import Messages from './Messages';
import ChatRoomTitle from './ChatRoomTitle';
let socket;
const Chat = ({ location })=>{
    const history = useHistory();
    const [name,setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('');
   
    useEffect(()=>{
       
        socket = io(process.env.REACT_APP_ENDPOINT, { transports : ['websocket'] });
        const {name,room } = queryString.parse(location.search);
        setName(name);
        setRoom(room);

        socket.emit('join', {name,room} ,(error)=>{
            if(error){
            alert(error);
            history.push('/');
            }
            
        });
    },[process.env.REACT_APP_ENDPOINT,location.search]); 

    useEffect(()=>{
        
        socket.on('message',(msg)=>{
            setMessages((oldarr)=>{
                return [...oldarr,msg]
            
            })
        
        })

        socket.on('roomData',({users})=>{
            console.log(users);
            setUser(users);

        })





    },[]);
    
    const sendMessage=(event)=>{
        event.preventDefault();
        if (message){
            socket.emit('sendMessage',message,()=>setMessage(''));
        }
        

    }




    return(
        <>
        <div className="container">
        <div className="row w-100 h-100 d-flex  justify-content-center align-items-center">
        <div className="col-12 col-md-10 h-75 chatarea ">
        <div className="d-flex flex-column justify-content-between w-100 h-100">
            <ChatRoomTitle room={room} users={user} />
            <Messages messages={messages} name={name} />
            <div className="input-group py-3">
            <input type="text" placeholder="Type a Message..." className="form-control messageinput ml-2 " onChange={(event)=>setMessage(event.target.value)} onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} value={message} />
            <div className="input-group-append">
            <button className="btn btn-primary mx-2 sendbtn" onClick={event=>sendMessage(event)}><i class="fa fa-x fa-paper-plane" aria-hidden="true"></i></button>
            
            </div>
            </div>
        </div>
        
        </div>
        </div>
        
        
        </div>
        </>
    )
}
export default Chat;
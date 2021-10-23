import React,{useState} from 'react';
import './Join.css';
import {Link} from 'react-router-dom';

const Join = ()=>{
    const [name,setName] = useState('');
    const [room, setRoom] = useState('');
    return(
        <div className="container d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 joindiv h-50 d-flex flex-column justify-content-around">
            <h1 className="display-4 text-center" ><u>Connected</u></h1>
                <form>
                    <input type="text" placeholder="Enter Name" className="form-control mt-3 joininput" onChange={(event)=>setName(event.target.value)} />
                    <input type="text" placeholder="Enter Room" className="form-control mt-3 joininput" onChange={(event)=>setRoom(event.target.value)} />
                    <Link onClick={(event)=>(!name || !room) ? event.preventDefault():null} to={`/chat?name=${name}&&room=${room}`} className="btn btn-outline-dark mt-4">Join Chat</Link>
                </form>

            
            </div>
        </div>
    )
}
export default Join;
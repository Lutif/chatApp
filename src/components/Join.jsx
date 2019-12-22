import React ,{ useState}from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
//material ui design




export default function Join() {
    let [{username, room},setData] = useState({ username:'',room:'' });
    
    function handleChange(event) {
        let {name, value} = event.target 
        setData(prevData => ({...prevData, [name]: value}))
        console.log(`name : ${username} room:${room}`)
         
    }
    function preventEmptyClick(event) {
        return (!username || !room)? event.preventDefault():null
    }

    return (
        <div
            className="joinContainer">
            <h1>Welcome to Chat</h1>
            <input type="text" name='username' placeholder='Enter your name' onChange={handleChange}/>
            <input type="text" name='room' placeholder='Enter room name' onChange={handleChange}/>
            
            <Link onClick={preventEmptyClick} to={`/chat?name=${username}&room=${room}`}>
            
                <button type='submit'  >Enter the room</button>
        </Link>
        </div>
        
    )
}

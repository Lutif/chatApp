import React ,{ useState}from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import signin from './images/signin.svg';
import logo from './images/logo.svg';
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
        <div>
            <div className='header'> <img src={logo} /> </div>
        <div className="joinContainer">
            <div className='signinForm'>
            <h1>Welcome to EverChat</h1>
            <input type="text" name='username' placeholder='Enter your name' onChange={handleChange}/>
            <input type="text" name='room' placeholder='Enter room name' onChange={handleChange}/>
            
            <Link onClick={preventEmptyClick} to={`/chat?name=${username}&room=${room}`}>
            
                <button type='submit'  >Sign in</button>
                </Link>
                
            </div>
            <div> <img className='signin' src={signin} /> </div>
            </div>
            </div>
            
            
    )
}

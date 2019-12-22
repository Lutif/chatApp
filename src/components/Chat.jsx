import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
const endPoint = 'localhost:5000';

export default function Chat({location}) {
    let [{name, room},setData]= useState({ name:'', room:'' });
    let [message, setMessage] = useState('');
    let [messages, setMessages] = useState([]);
    

    //handling join 
    useEffect(() => {
        const { name, room } = queryString.parse(location.search)
        console.log(location);
        socket = io(endPoint);
        socket.emit('Join', { name, room }, (error) =>
            console.log(error)
        );

        return () => { //handling cleaning.. executed at unmount
            socket.emit('disconnect');
            socket.off();
            console.log('cleaning done')
        }
    }, [location.search, endPoint]);
        

//for reviving messages
    
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);

        })
    }, [messages]);

    function sendMessage(event) {
        event.preventDefault()

        socket.emit('sendMessage', message, () => {         setMessage('');
    });
    
    }

        return (
            <div className="chatContainer">
                <div >
                    <p>messages</p>
                    {messages.map((message)=> <p key={message.user+message.text}>{message.user}:  {message.text}</p>)}
                </div>
                <input type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onKeyPress={(event) => event.key === "Enter" ? sendMessage(event) : null} />
                    {/* <button onClick={sendMessafe}>Send</button> */}
                </div>
    )}
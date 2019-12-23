import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
export default function App() {
    return (
       <Router basename={process.env.PUBLIC_URL}>
        <Route  path='/' exact component={Join} />
        <Route path="/chat" component={Chat} />
        </Router> 
     
    )
}
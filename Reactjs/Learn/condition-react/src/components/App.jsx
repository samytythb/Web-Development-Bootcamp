import React from 'react';
import Login from './Login';
var isLoggedIn = false;
function renderConditionally(){
    
}
function App(){
    return <div className="login">
        <h1>Login</h1>
        {isLoggedIn===true?<h1>Hello</h1>:<Login/>}
        {/* isLoggedIn===true&&<h1>Hello</h1>  used this if only just do if statement (note else) format :  condition&&expression*/}
    </div>
}
export default App;
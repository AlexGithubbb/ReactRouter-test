import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home';
import Help from './Help';


const Host = () => <h1>Host</h1>
const Signup = () => <h1>Sign up</h1>
const Login = () => <h1>Log in</h1>

function App() {
  return (
   <Router>
     <Route path='/' component = {Navbar} />
     <Route exact path='/' render= { (props) => {
        return <Home title= 'Hello, I am rendered!!' history = {props.history} match={props.match}/>
     }}
     />
     <Route path= '/host' component= {Host}/>
     <Route path= '/help' component= {Help}/>
     <Route path= '/signup' component= {Signup}/>
     <Route path= '/login' component= {Login}/>
   </Router>
  );
}

export default App;

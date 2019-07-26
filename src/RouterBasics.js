import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

function App() {
  return (
    <Router>
      <header>Header</header>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <footer>Footer</footer>
    </Router>
  );
}

export default App;

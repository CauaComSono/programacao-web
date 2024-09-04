import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from './pages/home';
import Todo from './pages/todo';
import Sobre from './pages/sobre';


function App() {
 

  return (
    <Router>
      <div className='App'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">Todo</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;

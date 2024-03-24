import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; 
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import Interaction from './components/Interactions';

const SearchBar = () => {
  const [query, setQuery] = useState("");

  function search(e){
      e.preventDefault();
      setQuery(e.target.value);
  }

  return (
      <div className="w-full max-w-xl flex mx-auto p-20 text-xl">
          <input
              type="text"
              className="w-full placeholder-gray-400 text-gray-900 p-4"
              placeholder="Search"
              onChange={search}
              value={query}
          />
          <button className="bg-white p-4">🔍</button>
      </div>
  );
};


const App = () => {
  return (
    <Router>
      <div>
      
        <nav>
               
          <ul>
          <img src="C:\Users\hp\anubhav\src\assets\LOGO1.jpg"  className="company-logo" />  
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/interaction">Interaction</Link>
            </li>
           
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/interaction" element={<Interaction />} />
          {/* <Route path="/search" element={<SearchBar />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

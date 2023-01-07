// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './components/users/User';
import Navbar from './components/navbar/Navbar';
import Posts from './components/posts/Posts';

function App() {
  return (
    <>
      <div className="App">
      <Router> 
      <Navbar/>
            <Routes>
              <Route  path="/" element={<User />} />
              <Route  path="/posts" element={<Posts />} />
              
            </Routes>
          </Router>
    </div>
    </>
  );
}

export default App;

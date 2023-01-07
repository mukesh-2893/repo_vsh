// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import User from './Components/users/user';
import Artists from './Components/artist/artist';
import Navbar from './Components/navbar/Navbar';
import Album from './Components/album/Album';



function App() {
  return (
    <div className='app'>
        
     <Router>
     <Navbar/>
            <Routes>              
              <Route path="/" element={<User />} />       
              <Route exact path="/artists" element={<Artists /> } />
              <Route exact path="/album" element={<Album /> } />
              
            </Routes>
          </Router>
    </div>
  );
}

export default App;

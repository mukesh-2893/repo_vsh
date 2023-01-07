// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artist from './Components/artist/artist';
import Album from './Components/album/Album';
import User from './Components/users/user';
import Navbar from './Components/navbar/Navbar';
import Carts from './Components/album_rating/Carts';
import UserRating from './Components/user_ratings/UserRating';


function App() {
  return (
    <div className="App">
      <Router>      
      <Navbar/>
            <Routes>
              <Route  path="/" element={<User />} />
              <Route  path="/artist" element={<Artist />} />
              <Route  path="/album" element={<Album />} />
              <Route  path="/albumrating" element={<Carts />} />
              <Route  path="/user.ratings" element={<UserRating />} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;

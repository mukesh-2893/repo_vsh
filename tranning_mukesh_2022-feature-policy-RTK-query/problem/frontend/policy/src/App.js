import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from './Components/users/user';
import Policy from './Components/policy/Policy';
import UserPolicy from './Components/userPolicy/UserPolicy';
import Navbar from './Components/common/Navbar';
import Claim from './Components/claim/Claim';


function App() {
  return (
    <div className="App">
      <Router> 
      <Navbar/>
            <Routes>
              <Route  path="/" element={<User />} />
              <Route  path="/policy" element={<Policy />} />
              <Route  path="/user.policy" element={<UserPolicy />} />
              <Route  path="/claim" element={<Claim/>} />
              
            </Routes>
          </Router>
    </div>
  );
}

export default App;

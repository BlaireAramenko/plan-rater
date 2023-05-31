
import HomePage from './components/HomePage';
import { Routes, Route, Link } from 'react-router-dom';
import CreatePlanPage from './components/CreatePlanPage';
import About from './components/About';
import Profile from './components/Profile';


import './App.css';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/createplan">Create Plan</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/profile">Profile</Link>
          </li>
      </ul>
    </nav>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/createplan" element={<CreatePlanPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route />
      </Routes>
      </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Dragon from './components/Dragon';
import Missions from './components/missions/Missions';
import Rockets from './components/Rockets';
import { fetchRockets } from './redux/rocket/rocketsSlice';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="mt-2">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Dragons" element={<Dragon />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

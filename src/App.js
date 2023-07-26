import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dragon from './components/Dragon';

function App() {
  return (
    <div className="mt-2">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon" element={<Dragon />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

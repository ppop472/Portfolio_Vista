import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Pages/Home';
import Projectpage from './Components/Pages/Projects';
import NewsSite from './Components/Pages/NewSite';
import TheKEMBITTimes from './Components/Pages/TheKEMBITTimes';
import ExtraBewijsstukken from './Components/Pages/ExtraBewijsstukken';

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/projects/NewsSite" element={<NewsSite />} />
        <Route path="/projects/TheKEMBITTimes" element={<TheKEMBITTimes />} />
        <Route path="/projects/ExtraBewijsstukken" element={<ExtraBewijsstukken />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

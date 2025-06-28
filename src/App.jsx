import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/landing_page';


const App = () => {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<LandingPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;

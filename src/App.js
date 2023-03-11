import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/NavBar';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
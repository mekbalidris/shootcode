import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'C:/Users/idris/OneDrive/Desktop/shootcodefullstack/shootcodefrontend/src/layout/Layout.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Scoreboard from './pages/Scoreboard';
import Register from './pages/Register';


function App() {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App

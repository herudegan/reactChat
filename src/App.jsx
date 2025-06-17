import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Chat from './Chat';
import './index.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home';
import Edits from './pages/Edits';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h2>Hello React frontend</h2>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addcontact" element={<Edits />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path='/' element={<div className="container my-4">
          <TextForm mode={mode} heading='Enter Your Text Below' />
        </div>}></Route>
        <Route path='/about' element={<About mode={mode} />}></Route>
      </Routes>
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;

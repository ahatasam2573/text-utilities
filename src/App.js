import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound/NotFound';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has enabled', 'success');
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has enabled', 'success')
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={<div className="container my-4">
          <TextForm mode={mode} showAlert={showAlert} heading='Enter Your Text Below' />
        </div>}></Route>
        <Route exact path='/about' element={<About mode={mode} />}></Route>
        <Route exact path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;

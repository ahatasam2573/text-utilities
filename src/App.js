import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<div style={{ backgroundColor: '#aaa69d' }} className="container my-4">
          <TextForm heading='Enter Your Text Below' />
        </div>}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

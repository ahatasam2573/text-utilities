import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#aaa69d' }} className="container my-4">
        <TextForm heading='Enter Your Text Below' />
      </div>
    </>
  );
}

export default App;

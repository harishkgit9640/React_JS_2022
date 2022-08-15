import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';

    }
  }
  return (
    <>
      <Navbar title="HK Solution" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the Text here" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}
export default App;

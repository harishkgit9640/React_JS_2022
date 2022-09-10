import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Theme from './Components/Theme';

import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState("Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setAlert(null);
    }, 3000);
  }


  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      showAlert("Light Mode has Enabled", "success");
      document.body.style.backgroundColor = 'white';
      setText("Light Mode");

    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has Enabled", "success");
      setText("Dark Mode");
    }
  }

  return (
    <>
      <Routes>
        <Navbar title="HK Solution" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Route path='/'>
            <TextForm heading="Enter the Text here" mode={mode} showAlert={showAlert} />
          </Route>
          <Route path='About'>
            <About />
          </Route>
          <Route path='Theme'>
            <Theme title="Page Theme" subtitle="About me" />
          </Route>

        </div>
      </Routes>
    </>
  );
}
export default App;

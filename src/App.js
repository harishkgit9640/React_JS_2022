// import { useState } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import Alert from './Components/Alert';
// import About from './Components/About';
// import TextForm from './Components/TextForm';
import Theme from './Components/Theme';
function App() {
  // const [mode, setMode] = useState('light');


  /*
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
    */
  return (
    <>
      {/* <Navbar title="HK Solution" mode={mode} toggleMode={toggleMode} text={text} /> */}
      {/* <Alert alert={alert} /> */}
      <div className="container my-3">
        {/* <TextForm heading="Enter the Text here" mode={mode} showAlert={showAlert} /> */}
        {/* <About /> */}
        <Theme title="Theme Colour" subtitle="About me" />
      </div>
    </>
  );
}
export default App;

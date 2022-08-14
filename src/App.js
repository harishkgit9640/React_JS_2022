import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="HK Solution" about="About Us" />
      <div className="container my-3">
        <About />
        {/* <TextForm heading="Enter the Text here" /> */}
      </div>
    </>
  );
}

export default App;

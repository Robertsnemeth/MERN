import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Survey from './components/Survey';
import Results from './components/Results';
import Location from './components/Location';



function App() {

    const [currentName, setCurrentName] = useState("Bobby")

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/survey" element={<Survey currentName={currentName} setCurrentName={setCurrentName}/>}/>
            <Route path="/results" element={<Results currentName={currentName}/>}/>
            <Route path="/location/:city/:text/:background" element={<Location currentName={currentName}/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

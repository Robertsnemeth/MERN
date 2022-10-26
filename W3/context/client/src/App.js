import './App.css';
import { useState } from 'react'
import Wrapper from './components/Wrapper'
import Context from './contexts/Context'

function App() {

  const [name, setName] = useState("Bobby");

  return (
    <div className="App">
      <Context.Provider value={{name, setName}}>
          <Wrapper/>
      </Context.Provider>
    </div>
  );
}

export default App;

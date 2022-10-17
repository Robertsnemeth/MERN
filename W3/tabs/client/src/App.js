import './App.css';
import { Provider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic'; 
import Page from './components/Page'

function App() {

  const engine = new Styletron();

  return (
    <Provider value={engine}>
      {<Page/>}
    </Provider>
  );
}

export default App;

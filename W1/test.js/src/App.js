import './App.css';
import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState({items: [], totalPrice: 0.00})
  return (
    <div className="App">
      <h1>Hello Dojo</h1>
      <h2>Things i need to do:</h2>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
      <p>{count}</p>
      <p>{item.items} {item.totalPrice}</p>
      <button onClick = { () => setCount(count + 1)}>Click Me</button>
      <button onClick = { () => setItem({ items: "Baseball", totalPrice: item.totalPrice + 10.99 })}>Items</button> 
    </div>
  );
}
export default App;

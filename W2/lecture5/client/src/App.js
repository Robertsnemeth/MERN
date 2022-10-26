
import './App.css';
import React from 'react';
import Increment from './components/Increment'
import Decrement from './components/Decrement'
import Pokemon from './components/Pokemon'


function App() {

  const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});

noMondays.then( res => console.log(res) ).catch( err => console.log(err) );




  return (
    <div>
      Hello
      <Increment/>
      <Decrement/>
      <Pokemon/>
    </div>
  );
}

export default App;

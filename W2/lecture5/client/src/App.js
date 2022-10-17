
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form'


function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userNames, setUserNames] = useState([])

  return (
    <div>
      Hello
      <Form name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} userNames={userNames} setUserNames={setUserNames}/>
    </div>
  );
}

export default App;

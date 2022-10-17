import './App.css';
import Ad from "./components/Ad";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Sub from "./components/Sub";


function App() {
  return (
    <div className="App">
      <Header className="header"/>
      <div className="page">
      <Nav className="nav"/>
      <Main className="main">
        <Sub className="sub"/>
        <Sub className="sub"/>
        <Sub className="sub"/>
        <Ad className="ad"/>
      </Main>
      </div>
    </div>
  );
}

export default App;

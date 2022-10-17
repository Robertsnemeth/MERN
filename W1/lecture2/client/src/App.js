import './App.css';
import Dash from './components/Dash';
import Card from './components/Card';
import Link from './components/Link';
import styles from './App.module.css';


function App() {
  const {home} = styles;
  return (
    <div className={home}>
      <Dash item1="Mango" item2="Banana" item3="Pineapple"/>
      <Card info1="Bob" info2="31" info3="Brown"/>
      <Link/>
    </div>
  );
}

export default App;

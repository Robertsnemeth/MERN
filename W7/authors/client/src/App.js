import AuthorMain from "./views/AuthorMain";
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/author/all"/>} path="/"/>
          <Route element ={<AuthorMain/>} path="/author//*"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import PlayerMain from "./views/PlayerMain";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="flex bg-gray-50 h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/team/list"/>} path="/"/>
          <Route element={<PlayerMain/>} path="/team//*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

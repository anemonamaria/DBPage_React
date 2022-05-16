import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Menu from './components/Menu';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Menu/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/details" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

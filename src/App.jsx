import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Nav from './component/nav/Nav';
import Home from './pages/Home';
import ChamDiem from './pages/ChamDiem';
import XemDiem from './pages/XemDiem';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/cham-diem" element={<ChamDiem></ChamDiem>}></Route>
          <Route path="/xem-diem" element={<XemDiem></XemDiem>}></Route>
        </Route>
      </Routes>
  );
}

export default App;

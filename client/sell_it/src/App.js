import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import ProdUpload from "./components/seller/uploadProduct";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/productUpload" Component={ProdUpload}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

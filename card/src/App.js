
import './App.css';
import TestCard from './Components/firstPage';
import SucessCard from './Components/secondePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";


function App() {
  const [rating, setRating] = useState('1');

  return (
    <div className="App">
      
      <BrowserRouter>
       
          <Routes>
           
            <Route path="/seconde" element={<SucessCard rating = {rating}/>} />{" "}
            <Route exact path="/" element={<TestCard  setRating = {setRating}/>} />{" "}
          </Routes>{" "}
        
      </BrowserRouter>{" "}
    </div>
  )
}

export default App;

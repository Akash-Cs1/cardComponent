
import './App.css';
import TestCard from './Components/firstPage';
import SucessCard from './Components/secondePage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       
          <Routes>
           
            <Route path="/seconde" element={<SucessCard />} />{" "}
            <Route exact path="/" element={<TestCard />} />{" "}
          </Routes>{" "}
        
      </BrowserRouter>{" "}
    </div>
  )
}

export default App;

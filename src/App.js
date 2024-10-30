import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import React from "react";
import News from "./news";
import Sample from "./sample";
// import IndiaTime from './IndiaTime';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/news' element={<News />} />
          <Route path='/sample' element={<Sample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

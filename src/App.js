import React from 'react';
import {BrowserRouter as Router,HashRouter, Route, Routes} from "react-router-dom";
import "./App.css"
import Student from './Student';
import Career from './Career';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path='/student' element={<Student/>} /> 
          <Route exact path='/career' element={<Career/>} /> 
          <Route path="*" element={<Student/>} />
        </Routes>
      </Router>
{/*       
      <Student/> 
       <Career/> */}
    </div>
  );
}

export default App;

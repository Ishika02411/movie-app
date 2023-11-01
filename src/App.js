 import './App.css';
 import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import header from './components/header/header';
function App() {
  return (
    <div className="App">
      <Router>
        <header />
        <Routes>
          <Route path="/" element= {<h1>Hello world</h1>}> </Route>
           <Route path= "movie/:id" element={<h1> movie detail page</h1>}> </Route>
          <Route path= "movies/:type" element={<h1> movie list page</h1>}> </Route>
          <Route path= "/*" element={<h1> error page</h1>}> </Route> 
        </Routes>
      </Router>

    </div>
  );
}

export default App; 

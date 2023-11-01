// import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element= {<h1>Hello world</h1>}> </Route>
           <Route path= "movie/:id" element={<h1> movie detai page</h1>}> </Route>
          <Route path= "movie/:type" element={<h1> movie list page</h1>}> </Route>
          <Route path= "/*" element={<h1> error page</h1>}> </Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;

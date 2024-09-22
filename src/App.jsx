import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Input from './components/Input'; 
import Output from './components/Output';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Input />} /> 
        <Route path="/output" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default App;

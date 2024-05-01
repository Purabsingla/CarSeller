// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Vid from './Login_Signup/Login';
import Vid2 from './Login_Signup/Signup';
import React, { useState, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      setLoading(false);
    };
  }, []);

  if (loading) {
    return (
      <div className='absolute top-1/2 left-1/2'>
        <Spinner className="h-12 w-12" color='blue'/>
      </div>
    );
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Vid />} />
          <Route path='/signup' element={<Vid2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

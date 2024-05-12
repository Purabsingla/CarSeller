// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Spinner } from "@material-tailwind/react";
import Login_1 from "./Login_Signup/SignUp";
import Log from "./Login_Signup/Login_1";
const Home = lazy(() => import("./Main"));
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <Spinner
                    className="h-12 w-12 absolute top-[50%] left-[50%]"
                    color="blue"
                  />
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route path="/login" element={<Log />} />
          <Route path="/signup" element={<Login_1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

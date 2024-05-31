import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import Api from "./Secret/SecretRouter";
import { TableWithStripedRows } from "./Secret/AllData";
import Sedan from "./Category/components/Sedan";
const Category = lazy(() => import("./Category/Category_Combined"));
const Home = lazy(() => import("./Main"));
const SignUp = lazy(() => import("./Login_Signup/SignUp"));
const SignIn = lazy(() => import("./Login_Signup/Login_1"));

function App() {
  useEffect(() => {
    console.log(window.innerWidth, "And Height is ", window.innerHeight);
  });
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
          <Route
            path="/login"
            element={
              <Suspense
                fallback={
                  <Spinner
                    className="h-12 w-12 absolute top-[50%] left-[50%]"
                    color="blue"
                  />
                }
              >
                <SignIn />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense
                fallback={
                  <Spinner
                    className="h-12 w-12 absolute top-[50%] left-[50%]"
                    color="blue"
                  />
                }
              >
                <SignUp />
              </Suspense>
            }
          />
          <Route
            path="/category"
            element={
              <Suspense
                fallback={
                  <div>
                    <p>Loading</p>
                    <Spinner
                      className="h-12 w-12 absolute top-[50%] left-[50%]"
                      color="blue"
                    />
                  </div>
                }
              >
                <Category />
              </Suspense>
            }
          />
          <Route path="/abcd1234dcba" element={<Api />} />
          <Route path="/tablesdata" element={<TableWithStripedRows />} />
          <Route path="/Sedan" element={<Sedan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

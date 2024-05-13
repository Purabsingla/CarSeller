import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { Spinner } from "@material-tailwind/react";
const Category = lazy(() => import("./Category/Category_Combined"));
const Home = lazy(() => import("./Main"));
const SignUp = lazy(() => import("./Login_Signup/SignUp"));
const SignIn = lazy(() => import("./Login_Signup/Login_1"));
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
                  <Spinner
                    className="h-12 w-12 absolute top-[50%] left-[50%]"
                    color="blue"
                  />
                }
              >
                <Category />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

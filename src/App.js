import "./app.css"
import HomePage from "./home";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import GLogin from "./login/google";
import Registration from "./registration";
import Oops from "./oops";
import Dashboard from "./dashboard";
import MyDependents from "./dashboard/MyDependents";
import RegistrationForm from "./RegisterationForm/src/RegistrationForm";
import NavBar from "./nav/NavBar";

export default function App() {
  const template = () => (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route
            index
            element={
              <HomePage />
            }
          />
          <Route
            path="/login"
            element={
              <GLogin />
            }
          />
           <Route
            path="/registration"
            element={
              <RegistrationForm/>
            }
           /> 
            <Route
            path="/oops"
            element={
              <Oops/>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard/>
            }
          />
          <Route
            path="/dependents"
            element={
              <MyDependents/>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );

  return <div className="App">{template()}</div>;
}

import "./app.css"
import HomePage from "./home";
import React, { useState } from "react";
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
import Admin from "./Admin/Admin";
import Profile from "./profile/UserProfile.js";

export default function App() {

  const template = () => (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route
          index
            path="/"
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
          <Route
            path="/admin"
            element={
              <Admin />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );

  return <div className="App">{template()}</div>;
}

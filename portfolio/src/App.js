import './App.css';
import logo from './logo.svg';
import {Header, Footer} from "./components/headerfoot";
import Home from "./components/home";
import { AboutMe} from "./components/aboutme";
import {Project} from "./components/project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router basename="/">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/aboutme/" element={<AboutMe/>} />
            <Route path="/mywork/:id" element={<Project/>} />
          </Routes>
          <Footer />
      </Router>
      
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/AppHeader";
import ContactPage from "./Pages/Contacts";
import {
  HashRouter  as Router,
  Navigate,
  Routes,
  Switch,
  Route,
} from "react-router-dom";

import React from "react";


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Navigate to ="/contacts" />}/>


          <Route exact path="/contacts" element={<ContactPage />} />
  
    </Routes>
      </Router>
  );
}

export default App;

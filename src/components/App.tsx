import "../styles/App.css";
import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Expenses } from "./expenses/Expenses";
import { Form } from "./form/Form";
import Header from "./Header";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {/*<header className="App-header">
            <Form />
          </header>
          <section>
            <Expenses />
  </section>*/}
        </div>
      </Router>
    </>
  );
}

export default App;

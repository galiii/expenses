import "../styles/App.css";
import * as React from 'react';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Expenses } from "./expenses/Expenses";
import { Form } from "./form/Form";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
      <section>
        <Expenses />
      </section>
    </div>
  );
}

export default App;

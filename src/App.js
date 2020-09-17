import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import NumberPage from './pages/NumberPage'

function App() {

  return (
    <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/number" component={NumberPage} />
          </div>
        </Router>
    </div>
  );
}

export default App;

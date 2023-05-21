import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { Router, useNavigate, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import {StartButton } from "./LoginButton"
import cow from './1.png'

export function App() {
  return (
    <div className="App">
      <div style={{ backgroundImage: 'url(${cow})' }}>
        <header className="App-header"> 
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src={cow} width="400" height="300" alt="COW"/> */}
          <h1>Aggie Anon!</h1>
          <p>A safe space for mental health!</p>
          <div>
            <StartButton />
          </div>
        </header>
      </div>
    </div>
  );
}


export default App;



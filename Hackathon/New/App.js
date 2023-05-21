import './App.css';
import { useState } from 'react';
import React from 'react';
import { Router, useNavigate, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import {StartButton } from "./LoginButton";
// import IMAGES from './index.js';
import cow from './1.png';

export function App() {
  return (
    <div className="App">
      <div class = "image" style={{width: '600px',
                                  height: '1000px',
                                   backgroundSize: 'cover',
                                   backgroundImage: `url(${cow})`}}>
        <header className="App-header"> 
          <h1>\tab</h1>
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



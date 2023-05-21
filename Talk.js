import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { Router, useNavigate, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';

function Talk() {

    return(
        <div>
            <h1>Woooo Talking!</h1>
            <div>
                {/* Need to put in 3 different buttons to correlate to the 3 different functions. */}
                {/* <Login /> */}
            </div>
        </div>
    );

}

//Need 3 functions to direct to different pages.
export function Login() {
    const navigate = useNavigate();
    const routeChange = () => {
      let path = '/Dashboard';
      navigate(path);
    }
  
  
    return (
      <div className="app flex-row align-items-center">
        <Container>
          ...
          <button variant="primary" className="px-4" onClick={routeChange}>
            Login
          </button>
          ...
        </Container>
      </div>
    );
  }

export default Talk;
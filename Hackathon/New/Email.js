import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { Router, useNavigate, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import {StartButton } from "./LoginButton"

function Email() {

    return(
        <div>
            <h1>This is the Email login!</h1>
            <div>
                <Login />
            </div>
            <div>
                <Back />
            </div>
        </div>
    );

}


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

  export function Back() {
    const navigate = useNavigate();
    const routeChange = () => {
      let path = '/';
      navigate(path);
    }
  
  
    return (
      <div className="app flex-row align-items-center">
        <Container>
          ...
          <button variant="primary" className="px-4" onClick={routeChange}>
            Back
          </button>
          ...
        </Container>
      </div>
    );
  }

export default Email;
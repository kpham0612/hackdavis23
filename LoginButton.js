import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { Router, useNavigate, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';



export function StartButton() {
    const navigate = useNavigate();
    const routeChange = () => {
      let path = '/Email';
      navigate(path);
    }
  
  
    return (
      <div className="app flex-row align-items-center">
        <Container>
          ...
          <button variant="primary" className="px-4" onClick={routeChange}>
            Start
          </button>
          ...
        </Container>
      </div>
    );
  }

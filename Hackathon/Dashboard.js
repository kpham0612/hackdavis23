import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { Router, useNavigate, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import {StartButton } from "./LoginButton";
import Talk from './Talk';

function Dashboard() {

    return (
        <div>
            <h1>This is the Dashboard!</h1>
            <div>
                <Select/>
            </div>
        </div>
    );
}

export function Select() {
    const navigate = useNavigate();
    const routeChange = () => {
      let path = '/Talk';
      navigate(path);
    }
  
  
    return (
      <div className="app flex-row align-items-center">
        <Container>
          ...
          <button variant="primary" className="px-4" onClick={routeChange}>
            Select
          </button>
          ...
        </Container>
      </div>
    );
  }


export default Dashboard;
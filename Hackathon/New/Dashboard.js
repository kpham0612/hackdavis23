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
            <h2>Welcome to Aggie Anonymous!</h2>
            <p>
              Enter stuff here! Maybe to-do list, exercise, etc.
              Also enter in a chat.
              Maybe a 3 dot side bar to have: chat room, about page, UC Davis resources, etc.
            </p>
            <div>
              <Select/>
            </div>
            <button>
              About
            </button>
            <button>
              Resources
            </button>
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
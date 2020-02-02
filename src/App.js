import React from 'react';
import { Router } from 'react-router-dom'
import history from './Constants'
import PageLayout from './Layout'


export default function App() {
  return (
    <Router history={history}>
      <PageLayout />
    </Router>
  );
}

import React from 'react';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import history from './Constants'
import PageLayout from './Layout'


export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <PageLayout />
      </Router>
    </Provider>
  );
}

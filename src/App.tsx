import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from './routes';
import { rootReducer } from './store';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { CssBaseline } from '@material-ui/core';

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <CssBaseline>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {Routes.map((route) => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </Provider>
    </CssBaseline>
  );
}

export default App;

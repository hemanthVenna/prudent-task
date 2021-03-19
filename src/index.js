import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import Login from './pages/Login/Login';
import Dashboard from "./pages/Dashboard/dashboard";
import AddEmployee from "./pages/CreateEmployee/employee"
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/new-employee" component={AddEmployee}></Route>
        <Route></Route>
      </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

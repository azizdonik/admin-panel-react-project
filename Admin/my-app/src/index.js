import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss"
import App from './App';
import { ContextProvider } from "./context"
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <ContextProvider>
    <Router>
       <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);

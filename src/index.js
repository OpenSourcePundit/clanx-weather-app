import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataContext, DataProvider} from "./Context/dataContext";
import {BrowserRouter as Router} from 'react-router-dom'

export {DataContext};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider >
        <App/>
      </DataProvider>
      </Router>  
  </React.StrictMode>
);
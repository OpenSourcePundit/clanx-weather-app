import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataContext, DataProvider} from "./Context/dataContext";

export {DataContext};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DataProvider >
        <App/>
      </DataProvider>
  </React.StrictMode>
);
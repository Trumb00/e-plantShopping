import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // 1. Importing Provider from react-redux
import store from './store.js'; // 2. Importing the Redux store from store.js

// 3. Wrapping the App component with the Provider component and passing the Redux store as a prop
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Redux store is passed here */}
      <App />
    </Provider>
  </React.StrictMode>,
);

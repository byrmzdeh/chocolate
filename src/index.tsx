// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import './sass/style.scss'
// import 'react-toastify/dist/ReactToastify.css';
// import { Provider } from 'react-redux'


// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { getnewssFromDatabase } from './maneger/actions/newAction';
import configureStore from './maneger/store/newStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './sass/style.scss'
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();
const result: JSX.Element = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(getnewssFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
});




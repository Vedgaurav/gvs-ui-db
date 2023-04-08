import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './RegisterationForm/src/commonPages/RegStore';
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <StrictMode>
    <Provider store={store}><App /></Provider>
  </StrictMode>
);

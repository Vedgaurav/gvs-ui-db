import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './RegisterationForm/src/commonPages/RegStore';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}><App /></Provider>
  </StrictMode>,
  rootElement
);

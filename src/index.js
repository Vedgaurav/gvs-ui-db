import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './RegisterationForm/src/commonPages/RegStore';
import PleaseWaitContextProvider from "./context/PleaseWaitContextProvider.js";
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <StrictMode>
    <PleaseWaitContextProvider>
      <Provider store={store}><App /></Provider>
    </PleaseWaitContextProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './RegisterationForm/src/commonPages/RegStore';
import store2 from "./RegisterationForm/src/Reducers/UiStatesReducer";
import PleaseWaitContextProvider from "./context/PleaseWaitContextProvider.js";
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <StrictMode>
    <PleaseWaitContextProvider>
      <Provider store={store}><Provider store={store2}><App /></Provider></Provider>
    </PleaseWaitContextProvider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

let initialStore = {
  businessmen: [],
  companies: [],
  places: [],
 
};

let reducer = (latestStore = initialStore, dispatchedObj) => {
  console.log(`inside reducer`);
  console.log(dispatchedObj);
  if (dispatchedObj.type == "addBusinessman") {
    return {
      ...latestStore,
      businessmen: latestStore.businessmen.concat(dispatchedObj.data),
    };
  } else if (dispatchedObj.type == "addCompany") {
    return {
      ...latestStore,
      companies: latestStore.companies.concat(dispatchedObj.data),
    };
  } else if (dispatchedObj.type == "addPlace") {
    return {
      ...latestStore,
      places: latestStore.places.concat(dispatchedObj.data),
    };
  }

  return latestStore;
};

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

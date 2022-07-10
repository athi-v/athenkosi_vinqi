import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss"; //SASS styling file
import App from "./App";

// a dependency  from react-router-dom helps with routing through the website
import { BrowserRouter } from "react-router-dom"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

// For react-router to work, the react App must be added within the BrowserRouter.
// After adding react App within the BrowserRouter, the routing is done on App.js
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

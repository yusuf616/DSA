import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css"
import "assets/css/components/alert.css"
import { Provider } from "react-redux";
import { Store } from "store/stroe";
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<Provider store={Store}>
    <div id="alert"></div>
    <App/>
</Provider>)
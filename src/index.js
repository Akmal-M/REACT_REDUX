import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from 'react-redux'
import {index} from "./store";
import {store} from "./store/store";
import WordComponent from "./components/wordComponent";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><WordComponent /></Provider>);



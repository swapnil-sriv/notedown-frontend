import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { useState } from "react";
import {createRoot} from "react-dom/client";

const root = document.getElementById('root');


createRoot(root,{concurrent:true}).render(<App/>);


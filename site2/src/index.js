import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";
import "./index.css";

const h1 = (
   <div id="app"> 
    <h1>Hello World!</h1>
    <Button name="Hello"/>
  </div>
  );



const root = document.getElementById('root');

ReactDOM.render(h1,root);
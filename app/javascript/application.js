// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import * as bootstrap from "bootstrap"
import "./controllers"
import Hello from "./react/App"
import "react"
import "react-dom"
import { mountComponents } from 'react-rails-ujs';

mountComponents({
  Hello,
});

let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))  
let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {  
  return new bootstrap.Popover(popoverTriggerEl)  
})

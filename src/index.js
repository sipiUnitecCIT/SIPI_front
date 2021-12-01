import React from "react"
import ReactDOM from "react-dom"
import "tailwindcss/tailwind.css"
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import "./scss/App.scss"
import App from "./App"

ReactDOM.render(
  <App/>, 
  document.getElementById("app")
)
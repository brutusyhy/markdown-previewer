// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
//
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// To pass freeCodeCamp tests, we need to use older render method
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />,  document.getElementById("root"));
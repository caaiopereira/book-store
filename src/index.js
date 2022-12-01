// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./view/Layout";
import Home from "./view/Home";
import Produtos from "./view/Produtos";
import Contatos from "./view/Contatos";
import NoPage from "./view/NoPages";
import Midia from "./view/Midia";
import Sobre from "./view/Sobre";
import Dashboard from "./view/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Produtos" element={<Produtos />} />
          <Route path="Midia" element={<Midia />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="Contatos" element={<Contatos />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//react router w3c schools 
// metodo de instalação - npm i -D react-router-dom 
//https://www.w3schools.com/react/react_router.asp
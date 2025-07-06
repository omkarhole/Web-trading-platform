import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import Home from "./components/Home";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";

import PrivateRoute from "./components/PrivateRoute";
import { CookiesProvider } from "react-cookie";


import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
        {/* <Route path="/*" element={<Home />} />     */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Home />
             </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
)

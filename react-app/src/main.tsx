import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './component/Users/Users';
import Admin from './component/Admin/Admin';
import HomePage from './component/Home/HomePage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/users" element={<Users />} />
                <Route path="/admin" element={<Admin />} />
            </Route>

        </Routes>
    </BrowserRouter>
)

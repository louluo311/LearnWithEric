import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './component/User/User';
import Admin from './component/Addmin/Admin';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="users" element={<User />} />
                <Route path="admins" element={<Admin />} />
            </Route>
            {/* thay đổi cái link path */}

        </Routes>

    </BrowserRouter>
)

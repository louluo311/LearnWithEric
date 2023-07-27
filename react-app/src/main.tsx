import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './component/User/User';
import Admin from './component/Addmin/Admin';
import HomePage from './component/Home/HomePage';
import ManageUser from './component/Addmin/Content/ManageUser';
import DashBoard from './component/Addmin/Content/DashBoard';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="users" element={<User />} />

            </Route>
            {/* thay đổi cái link path */}
            <Route path="/admins" element={<Admin />} >
                <Route index element={<DashBoard />} />
                <Route path="manage-users" element={<ManageUser />} />
            </Route>
        </Routes>

    </BrowserRouter>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import User from './component/User/User';
import Admin from './component/Admin/Admin';
import HomePage from './component/Home/Homepage';
import ManageUser from './component/Admin/Content/ManageUser';
import DashBoard from './component/Admin/Content/Dashboard';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<HomePage />} />
                <Route path="/users" element={<User />} />
            </Route>
            <Route path="/admins" element={<Admin />} >
                <Route index element={<DashBoard />} />
                <Route path="manage-users" element={<ManageUser />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

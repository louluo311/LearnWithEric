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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/users" element={<User />} />
                <Route path="/admins" element={<Admin />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

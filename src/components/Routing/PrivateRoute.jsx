import React from 'react'
import {Outlet,Navigate} from 'react-router-dom';
import Login from "../Login/Login";
import { loadData } from '../../Utils/localStorage';
export default function PrivateRoute() {
    const userId = loadData("user_id");
    return userId ? <Outlet/> : <Navigate to="/login"/>;
}

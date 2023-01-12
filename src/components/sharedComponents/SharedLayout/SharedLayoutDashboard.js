import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';

const SharedLayoutDashboard = () => {
    return (
        <>
            <Dashboard>
                <Outlet/>
            </Dashboard>
        </>
    );
};

export default SharedLayoutDashboard;
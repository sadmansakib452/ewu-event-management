import React from 'react';
import './Dashboard.css'
import Sidebar from './Sidebar';
import MainDash from './MainDash/MainDash';


const Dashboard = () => {


    return (
        <div className='Dashboard'>
            <div className='DashboardGlass'>
                <Sidebar/>
                <MainDash/>
            </div>
            
        </div>
    );
};

export default Dashboard;
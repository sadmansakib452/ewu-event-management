import React from 'react';
import {Outlet, Navigate, useParams} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';
const PrivateOutlet = () => {

    const params = useParams();
    // console.log(params)
    const [loggedInUser] = useContext(UserContext);
    
    return loggedInUser.isSignedIn ? <Outlet /> : <Navigate to="/signIn" state={'/'+params['*']}/>
    
};

export default PrivateOutlet;
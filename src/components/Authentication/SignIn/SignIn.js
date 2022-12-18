import React from 'react';
import './SignIn.css'
import { useLocation } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';
import UserFormBanner from '../../sharedComponents/UserFormBanner/UserFormBanner';
import UserForm from '../../sharedComponents/UserForm/UserForm';
import Footer from '../../sharedComponents/Footer/Footer';

const SignIn = () => {

    const location = useLocation();
    const path = location.pathname.split('/');
    
    return (
        <div>
            <Header></Header>
            <UserFormBanner path=""></UserFormBanner>
            <UserForm path={path}></UserForm>
            <Footer></Footer>
            
        </div>
    );
};

export default SignIn;
import React from 'react';
import './SignIn.css'
import { useLocation } from 'react-router-dom';
import Header from '../../sharedComponents/Header/Header';
import UserFormBanner from '../../sharedComponents/UserFormBanner/UserFormBanner';
import SignInForm from '../../sharedComponents/UserForm/SignInForm/SignInForm';
import Footer from '../../sharedComponents/Footer/Footer';

const SignIn = () => {

    const location = useLocation();
    const path = location.pathname.split('/');
    
    return (
        <div>
         
          
            <SignInForm path={path}></SignInForm>
          
            
        </div>
    );
};

export default SignIn;
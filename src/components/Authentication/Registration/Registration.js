import React from "react";
import "./Registration.css";
import Header from "../../sharedComponents/Header/Header";
import UserFormBanner from "../../sharedComponents/UserFormBanner/UserFormBanner";
import SignUpForm from "../../sharedComponents/UserForm/SignUpform/SignUpForm";
import Footer from "../../sharedComponents/Footer/Footer";
import { useLocation } from "react-router-dom";

const Registration = (props) => {

  const location = useLocation();
  const path = location.pathname.split('/');
  return (
    <div>
      <Header></Header>
      <UserFormBanner></UserFormBanner>
      <SignUpForm path = {path}></SignUpForm>
      <Footer></Footer>
    </div>
  );
};

export default Registration;

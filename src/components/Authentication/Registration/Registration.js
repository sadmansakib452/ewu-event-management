import React from "react";
import "./Registration.css";
import Header from "../../sharedComponents/Header/Header";
import UserFormBanner from "../../sharedComponents/UserFormBanner/UserFormBanner";
import UserForm from "../../sharedComponents/UserForm/UserForm";
import Footer from "../../sharedComponents/Footer/Footer";
import { useLocation } from "react-router-dom";

const Registration = (props) => {

  const location = useLocation();
  const path = location.pathname.split('/');
  return (
    <div>
      <Header></Header>
      <UserFormBanner></UserFormBanner>
      <UserForm path = {path}></UserForm>
      <Footer></Footer>
    </div>
  );
};

export default Registration;

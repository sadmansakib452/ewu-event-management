import React from "react";
import "./Registration.css";
import Header from "../../sharedComponents/Header/Header";
import UserFormBanner from "../../sharedComponents/UserFormBanner/UserFormBanner";
import UserForm from "../../sharedComponents/UserForm/UserForm";
import Footer from "../../sharedComponents/Footer/Footer";
import { useParams } from "react-router-dom";

const Registration = (props) => {

    const {user} = useParams();
  return (
    <div>
      <Header></Header>
      <UserFormBanner></UserFormBanner>
      <UserForm user = {user}></UserForm>
      <Footer></Footer>
    </div>
  );
};

export default Registration;

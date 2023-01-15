import React from "react";
import Header from "../sharedComponents/Header/Header";
import Footer from "../sharedComponents/Footer/Footer";
import Banner from "../sharedComponents/Banner/Banner";
import AboutLogo from '../../images/logo.svg'
const About = () => {
  return (
    <div>
      <Header />
      <Banner />
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="col-md-6">
            <div>
                <img src={AboutLogo}/>
            </div>
        </div>
      </div>

      <div className="row mt-5">
      <div className="col-md-6">
            <div>
                <img src={AboutLogo}/>
            </div>
        </div>
      
        <div className="col-md-6">
        <div className="col-md-6">
          <h2>What We offer</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

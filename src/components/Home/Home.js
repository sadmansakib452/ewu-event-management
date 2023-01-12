import React from 'react';
import './Home.css'
import Header from '../sharedComponents/Header/Header'
import SearchEvent from '../sharedComponents/SearchEvent/SearchEvent';
import Banner from '../sharedComponents/Banner/Banner';
import CardContainer from '../sharedComponents/CardContainer/CardContainer';
import Reviews from './Reviews';
import Footer from '../sharedComponents/Footer/Footer'
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <SearchEvent></SearchEvent>
            <Banner></Banner>
            <CardContainer></CardContainer>
            <Reviews></Reviews>
            <Footer></Footer>
          
           
        </div>
    );
};

export default Home;
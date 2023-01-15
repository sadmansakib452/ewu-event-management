import {React, useContext} from 'react';
import Header from '../../components/sharedComponents/Header/Header'
import Footer from '../../components/sharedComponents/Footer/Footer'
import { UserContext } from "../../App";
import EventCard from './EventCard'
const Events = () => {

    const [loggedInUser,
        setLoggedInUser,
        getAllUserData,
        setGetAllUserData,
        getAllEventData,
        setGetAllEventData,
        getAllSupplierData, 
        setGetAllSupplierData,
        getAllUserEvent, 
        setAllUserEvent] = useContext(UserContext);
    console.log('From Events comp.',getAllEventData)

    return (
        <div>

            <Header/>
            <h1 className="mt-5 mb-5">Events</h1>
            <div className="d-flex">
            {
                getAllEventData.map((eventData) => <EventCard event={eventData} suppliers={getAllSupplierData}/>)
            }

            </div>

            <Footer/>
            
        </div>
    );
};

export default Events;
import React from 'react';
import './CardContainer.css'
import EventCard from '../EventCard/EventCard'
const CardContainer = () => {
    return (
        <div>
            
            <div className='card-section mt-5 mb-5'>

                <h5>Browse By Category</h5>
                <EventCard></EventCard>

            </div>

            <div className='card-section mt-5 mb-5'>

                <h5>Featured Videos</h5>
                <EventCard></EventCard>

            </div>

            

        </div>
    );
};

export default CardContainer;
import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Suppliers = () => {
   const [loggedInUser] = useContext(UserContext) 
   
    return (
        <div>

            <h1>email: {loggedInUser.email}</h1>
        </div>
    );
};

export default Suppliers;
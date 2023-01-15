import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../sharedComponents/Header/Header'
import Footer from '../sharedComponents/Footer/Footer'
import SupplierCard from './SupplierCard'
const Suppliers = () => {
 
    const [
        loggedInUser,
        setLoggedInUser,
        getAllUserData,
        setGetAllUserData,
        getAllEventData,
        setGetAllEventData,
        getAllSupplierData,
        setGetAllSupplierData,
        getAllUserEvent,
        setAllUserEvent,
      ] = useContext(UserContext);
   
    return (
        <div>
            <Header/>
            <h1>Suppliers</h1>
            <div className="d-flex mt-5">
            {getAllSupplierData.map((supplierData, index) => (
             <SupplierCard
            key={index}
            supplier={supplierData}
            
          />
        ))}
      </div>

            <Footer/>
           
        </div>
    );
};

export default Suppliers;
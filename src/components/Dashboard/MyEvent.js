import { React, useContext } from "react";
import { UserContext } from "../../App";
import DashboardEvent from "./DashboardEvent";

const MyEvent = () => {
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
  console.log('from My event',getAllUserEvent )
//   const {eventName,guestName, id, imageURL, location,supplierId} = event

  
  return (
    <div>
      <h1>My Events</h1>
      <div className="d-flex mt-5">
        {getAllUserEvent.map((eventData, index) => (
          <DashboardEvent
            key={index}
            event={eventData}
            suppliers={getAllSupplierData}
            
          />
        ))}
      </div>
    </div>
  );
};

export default MyEvent;

import { React, useContext } from "react";
import { UserContext } from "../../App";
const Profile = () => {
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
      <h1>Profile</h1>
      <div className="fs-5">
        <ol>
          {
            <>
              <li>
                Name: {loggedInUser.firstName + " " + loggedInUser.lastName}
              </li>
              <li>Email: {loggedInUser.email}</li>
              <li>Student Id: {loggedInUser.studentId}</li>
              <li>Phone: {loggedInUser.phoneNumber}</li>
              <li>Roll: {loggedInUser.userRoll}</li>
              <li>Gender: {loggedInUser.userGender}</li>
              <li>Skill: {loggedInUser.skill}</li>
            </>
          }
        </ol>

       
      </div>

      
    </div>
  );
};

export default Profile;

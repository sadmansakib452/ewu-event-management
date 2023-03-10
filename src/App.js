import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createContext, useState, Suspense, lazy, useEffect } from "react";

import PrivateOutlet from "./components/Authentication/PrivateOutlet/PrivateOutlet";

import Spinner from "./components/sharedComponents/Spinner/Spinner";
const Home = lazy(() => import("./components/Home/Home"));
const SignIn = lazy(() => import("./components/Authentication/SignIn/SignIn"));
const SignUp = lazy(() => import("./components/Authentication/SignUp/SignUp"));
const About = lazy(() => import("./components/About/About"));
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard.js"));
const Suppliers = lazy(() => import("./components/Suppliers/Suppliers"));
const UsersTable = lazy(() => import("./components/Dashboard/UsersTable.js"));
const SuppliersTable = lazy(() =>
  import("./components/Dashboard/SuppliersTable.js")
);
const Profile = lazy(() => import("./components/Dashboard/Profile.js"));
const MyEvents = lazy(() => import("./components/Dashboard/MyEvent.js"));
const AddEvent = lazy(() => import("./components/Dashboard/AddEvent.js"));
const EventsTable = lazy(() => import("./components/Dashboard/EventsTable.js"));
const AddSupplier = lazy(() => import("./components/Dashboard/AddSupplier.js"));
const Events = lazy(() => import("./components/Events/Events.js"));
export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState(() => {
    return JSON.parse(window.localStorage.getItem("user")) || {};
  });
  const [getAllUserData, setGetAllUserData] = useState(() => {
    return JSON.parse(window.localStorage.getItem("users")) || {};
  });
  const [getAllEventData, setGetAllEventData] = useState(() => {
    return JSON.parse(window.localStorage.getItem("events")) || {};
  });
  const [getAllSupplierData, setGetAllSupplierData] = useState(() => {
    return JSON.parse(window.localStorage.getItem("suppliers")) || {};
  });
  const [getAllUserEvent, setAllUserEvent] = useState(() => {
    return JSON.parse(window.localStorage.getItem("userEvents")) || {};
  });

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(loggedInUser));
    window.localStorage.setItem("users", JSON.stringify(getAllUserData));
    window.localStorage.setItem("events", JSON.stringify(getAllEventData));
    window.localStorage.setItem("suppliers", JSON.stringify(getAllSupplierData));
    window.localStorage.setItem("userEvents", JSON.stringify(getAllUserEvent));
  }, [loggedInUser, getAllUserData, getAllEventData,getAllSupplierData,getAllUserEvent]);

  // useEffect(() => {
  //   window.localStorage.setItem("user", JSON.stringify(loggedInUser));
  //   window.localStorage.setItem("users", JSON.stringify(getAllUserData));
  // }, [getAllUserData]);

  return (
    <UserContext.Provider
      value={[
        loggedInUser,
        setLoggedInUser,
        getAllUserData,
        setGetAllUserData,
        getAllEventData,
        setGetAllEventData,
        getAllSupplierData, 
        setGetAllSupplierData,
        getAllUserEvent, 
        setAllUserEvent
      ]}
    >
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PrivateOutlet />}>
              
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="allUser" element={<UsersTable />} />
                <Route path="allSupplier" element={<SuppliersTable />} />
                <Route path="profile" element={<Profile />} />
                <Route path="addEvent" element={<AddEvent />} />
                <Route path="addSupplier" element={<AddSupplier />} />
                <Route path="allEvent" element={<EventsTable />} />
                <Route path="myEvent" element={<MyEvents />} />
              </Route>
            
            </Route>
            <Route path="/events" element={<Events/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/suppliers" element={<Suppliers />} />

            <Route path="/signUp/" element={<SignUp />} />
            <Route path="/signIn/" element={<SignIn />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

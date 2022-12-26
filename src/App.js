import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/Authentication/SignIn/SignIn";
import Home from "./components/Home/Home";
import { createContext, useState } from "react";
import Budget from "./components/Budget/Budget";
import PrivateOutlet from "./components/Authentication/PrivateOutlet/PrivateOutlet";
import SignUp from "./components/Authentication/SignUp/SignUp";
// import Dashboard from "./components/Dashboard/Dashboard";
import Dashboard from "./components/DashboardTest/Dashboard"
import About from "./components/About/About";
import SharedLayout from "./components/sharedComponents/SharedLayout/SharedLayout";

import Suppliers from "./components/Suppliers/Suppliers";



export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
           

            <Route path="*" element={<PrivateOutlet />}>
              <Route path="budget" element={<Budget />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/suppliers" element={<Suppliers />} />
          </Route>



          <Route path="/dashboard" element={<Dashboard/>}>
            
           
       
            {/* <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/orders" element={<Orders />} />
              <Route path="/dashboard/deposits" element={<Deposits />} />
            </Route> */}
          

          </Route>

          <Route path="/signUp/" element={<SignUp />} />
          <Route path="/signIn/" element={<SignIn />} />
          
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

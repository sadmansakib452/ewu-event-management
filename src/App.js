import "./App.css";
import Header from "./components/sharedComponents/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Authentication/Registration/Registration";
import SignIn from './components/Authentication/SignIn/SignIn'
import Home from "./components/Home/Home";
import AddEvent from "./components/AddEvent/AddEvent";
import { createContext,useState } from "react";
import Suppliers from "./components/Suppliers/Suppliers";

import SignInTest from './components/sharedComponents/UserForm/SignInForm/SignInTest'
import Budget from "./components/Budget/Budget";
import PrivateOutlet from './components/Authentication/PrivateOutlet/PrivateOutlet'
import SignUp from "./components/sharedComponents/UserForm/SignUpform/SignUp";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <BrowserRouter>
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signUp/" element={<SignUp />} />
          <Route path="/signIn/" element={<SignInTest />} />
          {/* <Route path="/venue" element={<AddEvent />} /> */}
                                
          <Route path="/suppliers" element={<SignInTest />} />
          <Route path="*" element={<PrivateOutlet/>}>

            <Route path="budget" element={ <Budget/>}/>


          </Route>


        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

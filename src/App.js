import "./App.css";
import Header from "./components/sharedComponents/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Authentication/Registration/Registration";
import SignIn from './components/Authentication/SignIn/SignIn'
import Home from "./components/Home/Home";
import AddEvent from "./components/AddEvent/AddEvent";
import { createContext,useState } from "react";
import Suppliers from "./components/Suppliers/Suppliers";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <BrowserRouter>
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signUp/:user" element={<Registration />} />
          <Route path="/signIn/:user" element={<SignIn />} />
          <Route path="/venue" element={<AddEvent />} />
          <Route path="/suppliers" element={<Suppliers />} />

        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

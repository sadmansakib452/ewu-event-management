import "./App.css";
import Header from "./components/sharedComponents/Header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Authentication/Registration/Registration";
import Home from "./components/Home/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signUp/:user" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

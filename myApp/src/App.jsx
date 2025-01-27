import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import LeaderBoard from "../pages/LeaderBoard/LeaderBoard";
import AddNewUser from "../pages/AddNewUser/AddNewUser";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/leaderBoard" element={<LeaderBoard />} />
          <Route path="/addNewUser" element={<AddNewUser />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

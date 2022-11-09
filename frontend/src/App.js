import React from "react";
import Login from "./routes/login";
import Signup from "./routes/signup";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;

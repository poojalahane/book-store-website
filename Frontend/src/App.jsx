import React from "react";

import Home from "./pages/Home";
import Course from "./components/Course";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Courses from "./pages/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [auth, setAuth] = useAuth();
  console.log(auth);

  return (
    <div className="dark:bg-slate-900 dark-text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={auth ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* */}
    </div>
  );
};

export default App;

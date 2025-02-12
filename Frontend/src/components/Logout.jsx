import React from "react";
import { useAuth } from "../context/AuthProvider";

const Logout = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    try {
      setAuth({
        ...auth,
        user: null,
      });
      localStorage.removeItem("Users");
      alert("Logout successfullly.");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      alert(error.message);
      setTimeout(() => {}, 3000);
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

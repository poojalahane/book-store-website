import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/user/login", {
        email: data.email,
        password: data.password,
      });
      console.log(res.data);
      if (res.data) {
        alert("LOGIN Successfully");
        document.getElementById("my_modal_3").close();
        localStorage.setItem("Users", JSON.stringify(res.data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setLoginError("Invalid Email or Password");
    }
  };
  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeolder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span>This field is required</span>}
            </div>
            {loginError && (
              <p className="text-red-500 text-sm mt-2">{loginError}</p>
            )}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover: bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not Registered {"  "}
                <Link
                  to={"/signup"}
                  className="underline text-blue-500 cursor-pointer"
                >
                  {" "}
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;

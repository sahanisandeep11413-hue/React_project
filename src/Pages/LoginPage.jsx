import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from 'react-hook-form';
import { Auth } from "../context/AuthContext";

const LoginPage = () => {

      const {registeredUsers,loggedIn, setloggedIn} = useContext(Auth);

      const {
        register,
        handleSubmit,
         reset,
        formState: { errors },
      } = useForm();
    
      const submit = (data)=>{
      
        let user = registeredUsers.find((val)=>{
            return val.email===data.email  && val.password===data.password;

        });

        if(!user){
            alert("user not found");
                return;   
        }
        setloggedIn(user);
        localStorage.setItem("loggedin", JSON.stringify(user));
        
       reset();
       navigate("/main");
      };
   
    //ye built in function hai routes ka issase navigate hote hai
    let navigate = useNavigate();


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        
        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Login to your account
          </p>
        </div>

        {/* Login Form */}
        <form
        onSubmit={handleSubmit(submit)}
        className="space-y-5">
          
          {/* Email */}
        <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
            {...register("email",{ required: "email is required",})}
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
             {errors.email && <p className="text-red-700">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
            {...register("password",{ required: "password is required",
                minLength:{
                    value:6,
                    message:"minimum 6 charecters are required"
                }
            })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
             {errors.password && <p className="text-red-700">{errors.password.message}</p>}
          </div>


          {/* Login Button */}
          <button
          
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <button
           onClick={()=>navigate("/Register")}
            type="button"
            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
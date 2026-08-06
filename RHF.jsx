import React from 'react'
import { useForm } from 'react-hook-form';

const RHF = () => {
    
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const formSubmit = (data)=>{
     console.log(data);
     reset();
  }

  return (
       
     <div className="bg-white flex flex-col gap-5 w-80 shadow-lg p-5 rounded-lg">
  <h2 className="font-bold text-xl">react hook form</h2>

  <form 
  onSubmit={handleSubmit(formSubmit)}
   
   className="bg-white flex flex-col gap-4 p-4 rounded">
    <input
    {...register("name")}
      type="text"
      placeholder="Enter your name"
      className="w-full p-2 border border-gray-400 rounded"
    />
     
     <input
     {...register("email")}
      type="text"
      placeholder="Enter your email"
      className="w-full p-2 border border-gray-400 rounded"
    />
    

    <input
    {...register("password")}
   
      type="password"
      placeholder="Enter your password"
      className="w-full p-2 border border-gray-400 rounded"
    />

    <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-800">
      Register
    </button>
  </form>
</div>
      


    
  )
}

export default RHF

import React, { useState } from 'react';

const Web = () => {
   const [formData, setFormData] = useState({});
      console.log(formData);

      const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
      }

  return (

   
    <div >
        <form className= "flex flex-col gap-5 w-60 ">
     <input
     onChange={handleChange}
     className="border-2"
     name="name"
     type="text"
     placeholder="name"
     />
     
     <input
     onChange={handleChange}
     className="border-2"
     name="email"
     type="text"
     placeholder="email"
     />

     <input
     onChange={handleChange}
     className="border-2"
     name="password"
     type="password"
     placeholder="password"
     />
    

    </form>
    </div>
  )
}

export default Web

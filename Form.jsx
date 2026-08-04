import React, { useRef} from 'react';

const Form = () => {
  
    let inpRef = useRef();
    let inpRef2 = useRef();
    let inpRef3 = useRef();
   
   const handleSubmit = (e) =>{
        e.preventDefault();
         console.log(inpRef.current.value);
         console.log(inpRef2.current.value);
          console.log(inpRef3.current.value);
    }
    



  return (
     <div className="bg-white flex flex-col gap-5 w-80 shadow-lg p-5 rounded-lg">
  <h2 className="font-bold text-xl">Login</h2>

  <form
    onSubmit={handleSubmit}
   className="bg-white flex flex-col gap-4 p-4 rounded">
    <input ref={inpRef}
      type="text"
      placeholder="Enter your name"
      className="w-full p-2 border border-gray-400 rounded"
    />

    <input ref={inpRef2}
      type="email"
      placeholder="Enter your email"
      className="w-full p-2 border border-gray-400 rounded"
    />

    <input
    ref={inpRef3}
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

export default Form

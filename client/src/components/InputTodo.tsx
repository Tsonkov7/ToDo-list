import React, { Fragment } from 'react';
import axios from 'axios';

const InputTodo = () => { 
    const [description, setDescription] = React.useState<string>("");  
   const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
      const body = { description };
      await axios.post("http://localhost:5000/todos", body, {
        headers: { "Content-Type": "application/json" },
      });
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
   }
  return (
    <Fragment>
       <h1 className="text-center mt-4 ">Pern Todo</h1>
      <form className="flex justify-center mt-4" action="" onSubmit={onSubmitForm}>
        <input className="min-w-5/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
         type="text"
         value={description} onChange={e => setDescription(e.target.value)} placeholder="Add Todo..." />
        <button className="ml-2 text-white bg-green-700 hover:bg-green-300 px-4 rounded-md shadow-sm " type="submit">Add</button>
      </form>
    </Fragment>
  );
}
export default InputTodo;
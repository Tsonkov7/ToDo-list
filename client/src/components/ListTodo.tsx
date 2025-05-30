import React, { Fragment,useContext,useEffect } from 'react';
import axios from "axios";
import EditTodo from './EditTodo';
import { TodoContext, type Todo } from '../context/TodoContext';


const ListTodo: React.FC = () => {
    const {todos, setTodos}= useContext(TodoContext)

    const getTodos = async () => {
        try {
            const response = await axios.get("http://localhost:5000/todos");
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };
    const deleteTodo = async (id: number) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${id}`);
            setTodos(todos.filter((todo: Todo) => todo.todo_id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }

    

    useEffect(() => {
        getTodos();
    }, []);
    console.log(todos);
    return (
        <Fragment><div className="flex justify-center">
  <table className="mx-auto border mt-4 border-gray-300
  w-8/12 shadow-md rounded-lg">
    <thead className="bg-gray-100">
      <tr className="text-center">
        <th className="px-4 py-2">Description</th>
        <th className="px-4 py-2">Edit</th>
         <th className="px-4 py-2">Delete</th>
      </tr>
    </thead>
    <tbody>
        {todos.map((todo: Todo) => (
      <tr key={todo.todo_id} className="text-center">
        <td className="px-4 py-2">{todo.description}</td>
        <td className="px-4 py-2">
          <button className="text-blue-500 hover:text-blue-700"><EditTodo todo={todo}/></button>
        </td>
        <td className="px-4 py-2">
          <button className="text-white bg-red-500 hover:bg-red-700 px-3 py-2 rounded-md shadow" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
        </td>
        </tr>
            ))}
        
     
    </tbody>
  </table>
</div>
        </Fragment>
    );
};

export default ListTodo;
import React, { Fragment, useState } from 'react';
import axios from 'axios';

type Todo = {
    todo_id: number;
    description: string;
}

type EditTodoProps ={
    todo: Todo;
}

const EditTodo: React.FC<EditTodoProps> = ({ todo }) => {
    const [editedDescription, setDescription] = useState('');

    const submitTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can add your API call here to update the todo
        try {
            const body = { description: editedDescription };
            await axios.put(`http://localhost:5000/todos/${todo.todo_id}`, body, {
            headers: { 'Content-Type': 'application/json' },
            });
            window.location.href = '/'; // Redirect to the home page or refresh the list
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    return (
        <Fragment>
            <form className="flex justify-center " action="" onSubmit={(e) => submitTodo(e)}>
                <input
                    className="min-w-5/12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    type="text"
                    placeholder="Edit Todo..."
                    value={editedDescription}
                    onChange={e => setDescription(e.target.value)}
                    
                />
                <button
                    className="ml-2 text-white bg-green-700 hover:bg-green-300 px-4 rounded-md shadow-sm"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </Fragment>
    );
};

export default EditTodo;
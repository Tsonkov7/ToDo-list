import { createContext } from "react";


export type Todo = {
    todo_id: number;
    description: string;
};

interface ContextType {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoContext = createContext<ContextType>({
    todos: [],
    setTodos: () => null
});
import { Fragment, useState } from 'react'
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'
import Header from './components/Header'
import { TodoContext, type Todo } from './context/TodoContext'


import './App.css'


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <Fragment>
          <Header />
          <InputTodo />
          <ListTodo />
        </Fragment>
      </TodoContext.Provider>
    </>
  )
}



export default App

import React from 'react'
// import { Input } from "./components/Input";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTodo, setDelete } from './store/todo/todoSlice';
import { Todo } from './components/Todo';
// import { List } from "./components/List";




export default function App() {

  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(setTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(setDelete(id));
  };




  return (

    <>



      <div className="App">
        <h1>TODO List</h1>
        <form className="App-form" onSubmit={handleAddTodo}>
          <input type="text" onInput={(e) => setInput(e.target.value)} />
          <button type="submit">+</button>
        </form>
        <div className="Todos">
          {count > 0 && todos.map((todo) => (
              <Todo
                key={todo.id}
                text={todo.text}
                id={todo.id}
                onCheck={handleTodoDone}
              />
            ))}
          {count === 0 && <p>No todos</p>}
        </div>
      </div>
    </>

  )
}


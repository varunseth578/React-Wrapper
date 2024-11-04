// todo 
import React, { useState } from "react";

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "go to gym",
      desc: "go to gym 12",
    },
    {
      id: 2,
      title: "washing hand",
      desc: "washing hand",
    },
    {
      id: 3,
      title: "eat food",
      desc: "eat food",
    },
    {
      id: 4,
      title: "go to class",
      desc: "go to class",
    },
  ]);

  function addTodo() {
    //setTodo([...todos,{
    // id:4,
    // title:Math.random(),
    // desc:Math.random()
    //}])
    const newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      newTodos.push(todos[i]);
    }
    //newtodos == todos
    newTodos.push({
      id: 4,
      title: Math.random(),
      desc: Math.random(),
    });
    //existing ones
    setTodo(newTodos);
  }
  return (
    <div>
      <button onClick={addTodo}>Add Todo </button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} desc={todo.desc} />
      ))}
    </div>
  );
}
function Todo({ title, desc }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{desc}</h3>
    </div>
  );
}

export default App;

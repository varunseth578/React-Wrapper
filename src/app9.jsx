import { useEffect, useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        setInterval(()=>{
            fetch("https://react-todo-fiqe.onrender.com/todos").then(async function(res) {
                const json = await res.json();
                setTodos(json.todos);
            })
        },1000)
        
    }, []);

    return (
        <div>
            {todos.map((todo, index) => (
                <Todo key={index} title={todo.title} des={todo.des} />
            ))}
        </div>
    );
}

function Todo({ title, des }) {
    return (
        <div>
            <h1>{title}</h1>
            <h4>{des}</h4>
        </div>
    );
}

export default App;

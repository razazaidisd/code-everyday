import React, { useState } from 'react';
import './hooks.css';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add to do..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}



function Hooks() {
    const initialState = [
        {
            task: 'task 1',
            completed: false,
        },
        {
            task: 'task 2',
            completed: true,
        },
        {
            task: 'task 3',
            completed: false,
        },
    ];
    const [todos, setTodos] = useState(initialState);

    const addTodo = task => {
        const newTodos = [...todos, { task }];
        setTodos(newTodos);
    };

    const onComplete = (index, el) => {
        const todosClone = [...todos];
        todosClone[index].completed = el.checked;
        setTodos(todosClone);
    };

    const todoListEl = todos.map(
        (todo, key) => (
            <li className="todo" key={key}>
                <label>
                    <input type="checkbox" checked={todo.completed} onChange={e => onComplete(key, e.target)} />
                    <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
                        {todo.task}
                    </span>
                </label>
            </li>
        )
    );
    return (
        <div className="hooks-container">
            <h2>To do list</h2>
            {todoListEl}
            <TodoForm addTodo={addTodo}/>
        </div>
    )
}

export default Hooks;
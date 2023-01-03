import React, {useState} from "react"; 
import {v4 as uuidv4} from "uuid";
import Todo from './Todo'
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), todo: "Feed the cat"}, 
        {id: uuidv4(), todo: "Work on motorcycle"}
    ]
    const [todos, setTodos] = useState(INITIAL_STATE)
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuidv4()}])
    }
    const deleteTodo = (id) => {
        setTodos(todos => 
            [...todos.filter(todo => todo.id !== id)]
        )
    }
    return (
        <div>
            <h3>Todo List</h3>
            <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({id, todo}) => <Todo id={id} key={id} todo={todo}  deleteTodo={deleteTodo}/>)}
            </div>

        </div>
    )
}

export default TodoList;


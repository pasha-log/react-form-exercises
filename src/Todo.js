import React from "react"; 

const Todo = ({id, todo, deleteTodo}) => {

    return (
        <ul>
            <li id={id} key={id}>{`${todo}`}<button onClick={() => {deleteTodo(id)}}>X</button></li>
        </ul>
    )
}

export default Todo;
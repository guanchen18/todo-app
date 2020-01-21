import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    
    const todoList=todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className="collection-item">
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">you have no todo's left, yay!</p>
    )

    return (
        <div className="Todos collection">
        {todoList}
        </div>
    )

}

export default Todos;
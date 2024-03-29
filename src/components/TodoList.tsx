import React from 'react';

import {ITodo} from '../interfaces';

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
};

const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

    return (
        <ul>
            {todos.map((todo) => {
                const classes = ['todo'];

                if (todo.completed) {
                    classes.push('completed');
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={() => onToggle(todo.id)}/>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text"
                                onClick={() => onRemove(todo.id)}>
                                delete
                            </i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;
import React, {useState} from 'react';
import { Navbar, TodoForm, TodoList } from './components';

import { ITodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    
    setTodos((prev) => [newTodo, ...todos])
  };

  const toggleHandler = (id: number) => {
    console.log('bums');
    
    setTodos((prev) => prev.map((todo) => {
        if (todo.id === id) {
          
          return {
            ...todo,
            completed: !todo.completed
          }
          
        }
        return todo;
      }));
  };

  const removeHandler = (id: number) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id)
    });
  };

  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm onAdd={addHandler}/>
        <TodoList 
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}/>
      </div>
    </>
  );
}

export default App;

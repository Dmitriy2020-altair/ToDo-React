import React from 'react'
import TodoList from './ToDo/TodoList'
import Context from './ToDo/Context'
import AddTodo from './ToDo/AddToDo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 2, completed: false, title: 'Buy milk'},
    {id: 3, completed: false, title: 'Buy candy'},
    {id: 4, completed: false, title: 'Buy beer'},
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
     )
  } 

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}
  
  function addTodo(title) {
    setTodos(todos.concat([{
      title, 
      id: Date.now(),
      completed:false,
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
    <div className='wrapper'>
        <h1>Hello React</h1>
        <AddTodo onCreate={addTodo}/>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>Nothing to show</p>
}
      </div>
      </Context.Provider>
  )
}

export default App;

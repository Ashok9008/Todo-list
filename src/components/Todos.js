import React from 'react'
import TodoItem from '../components/TodoItem'

const Todos = (props) => {
  let myStyle = {
    minHeight: '81vh',
    margin: '40px auto',
  
  }
  return (
    <div className='container my-3 '  style={myStyle}>
      <h3 className=' my-3 ' >Todos list</h3>
      {props.todos.length === 0 ? 'No Todos to display' :
        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />

        })}
    </div>
  )
}

export default Todos
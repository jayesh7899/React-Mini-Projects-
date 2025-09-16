import React from 'react'

function ToDoItem({todo, onDelete}) {
  return (
    <div className=' my-3'>
        <h4 >{todo.title}</h4> 

        <p>{todo.desc}</p> 

        <button onClick={()=>{onDelete(todo)}} 
        className='btn btn-sm btn-danger'>
          Delete</button>    
    </div>
  )
}

export default ToDoItem

import React, { useState } from 'react'

function AddToDo({addTodo}) {

    const [title, setTitle]=useState('')
    const [desc, setDesc]=useState('')

    const submit=(e)=>{
    
        if(!title || !desc){
            alert("Title or Description cannot be Blank..")

        }
        else{

            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        

    }


  return (
    <div className='container my-3'>

        <h3 className='text-center my-3'>Add a ToDo Here</h3>

        <form action={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">ToDo Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} 
                className="form-control" id="title" aria-describedby="" />
                
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">ToDo Description</label>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}
                className="form-control" id="desc" />
            </div>
            <br />
         
            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
        </form>
                
    </div>
  )
}

export default AddToDo


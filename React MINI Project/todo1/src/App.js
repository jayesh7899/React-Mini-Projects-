
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponent/Header';
import { ToDos } from './MyComponent/ToDos';
import { Footer } from './MyComponent/Footer';
import { useState } from 'react';
import AddToDo from './MyComponent/AddToDo';

import { useEffect } from 'react';

function App() {

  
  let inittodo;

  if(localStorage.getItem("todos")===null){

    inittodo=[];

  }
  else{

    inittodo=JSON.parse(localStorage.getItem("todos"));

  }
  

  const onDelete=(todo)=>{

  

    setTodos(todos.filter((e)=>{

      return e!==todo;

    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{

    console.log(title,desc)
    let sno;
    if(todos.length===0){

      sno=1;

    }else{

      sno=todos[todos.length-1].sno+1;

    }

    const mytodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo)
  
  }
  const [todos,setTodos]=useState(inittodo)

  useEffect(()=>{

      localStorage.setItem("todos", JSON.stringify(todos));


    },[todos])

  return (
    <>

   

    <Header title="ToDo List" searchBar={true} /><br />


            <AddToDo addTodo={ addTodo} /><br />

            <ToDos todos={todos} onDelete={onDelete} />
  
    
    <Footer/>
    
    </>
    // todos is parent of todos.jsx means props.todo and todo is the parent of todoitem 
    //todos >> props.todo in todos.jsx >>  then pass to todoitem.jsx
    
  );
}

export default App;

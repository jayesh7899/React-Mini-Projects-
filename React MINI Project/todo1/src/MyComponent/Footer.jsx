import React from 'react'

export function Footer() {

  let footerstyle={
    position : "relative",
    top :"20vh",
    width : "100%",
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerstyle}>

      <p className='text-center'>
        
        Copyright &copy; MyToDo.com

      </p>
      
    </footer>
  )
}

 

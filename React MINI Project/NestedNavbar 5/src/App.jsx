import { useState } from 'react'

import { Navigate, Route, Routes} from 'react-router'

import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'
import ErrorPage from './ErrorPage'

import College from './College'

import Student from './Student'
import Department from './Department'

import Detail from './Detail'



function App() {
  

  return (
    <>

    {/*<NavBar/> */}
   
    <Routes>

      <Route element={<NavBar/>}>

          
        <Route path="/" element={<Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/login" element={<Login/>  } />
        
      </Route>

    
      <Route path="/college" element={<College/> } >

        <Route index element={<Student/> } />
        <Route path="department" element={<Department/> } />
        <Route path="detail" element={<Detail/> } />


      </Route>

      {  /* <Route path="/*" element={<ErrorPage/> } /> */  }

      <Route path='/*' element={<Navigate  to="/" />}/>
    </Routes>
    

      
        
    </>
  )
}

export default App

import React, {useState} from "react";
function MyComponent(){

    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName=()=>{
        
            setName("Jayesh Mali");
            
    }

    const incrementAge=()=>{
            setAge(age+1);
    }

    const toggleEmployedStatus=()=>{
        setIsEmployed(!isEmployed);
    }
    
    return <div>
       
        <p>Name : {name}</p>
        <button onClick={updateName}>Click here to SetName</button>
    
        <p>Age : {age}</p>
        <button onClick={incrementAge}>Click here to IncrementAge</button>
    
         <p>Is Employed : {isEmployed ? "Yes" : "No" }</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    
    </div>;



}
export default MyComponent
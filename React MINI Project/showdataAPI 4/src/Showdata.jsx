import React, { useEffect, useState } from "react";
import axios from "axios";



function Showdata() {


  const [Image, setImage]=useState([])

  // useEffect(()=>{
  //   getImage()          //call fun without calling
  // },[])

  const getImage=async()=>{
    try{
       const response= await axios.get('https://picsum.photos/v2/list')

       const data= response.data;
       
       setImage(data)
       console.log(data)

    }
    catch(error)
    {
      console.error("Error Fetching Images", error)
    }
   

  }

  function home(){

    setImage('')
  }


  return (

    <>
    <div className="p-8">

        <button onClick={getImage} className="px-5 py-3 bg-green-600 text-white font-bold cursor-pointer">Get Images</button>

        
        <div className="p-10">

          {
            Image.map((img, i)=>{
              
              return(
              <div key={i} className="m-10 rounded-xl inline-block ">

                 <h1 className="font-bold">{img.id}. {img.author}</h1>
                 <h1></h1>

                  <img src={img.download_url} alt="img" 
                  width={170} height={150} 
                  />
              </div>
             
              )

            })
          }
        </div>


      
    </div>

    </>
  )
}

export default Showdata

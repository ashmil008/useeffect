import React, { useEffect, useState } from 'react'

function count() {

    const[count,setCount]=useState(0)
    
    useEffect(()=>{
       let count =setTimeout(() => {
        setCount ((count)=>count * 2)
       }, 1000,);
    
    return ()=>clearTimeout(count)
    },[]);





  return <>
  <h1>i have render {count} times</h1>
   </>
    


}



export default Counter
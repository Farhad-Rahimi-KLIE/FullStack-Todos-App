import React, { useEffect, useState } from 'react'
import './update.css'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const UpdateMenu = () => {
  const [name, setName] = useState('')
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getUpdatedDetails();
  },[])

  const getUpdatedDetails = async ()=>{
    let result = await fetch(`http://localhost:3000/LEE/${params.id}`);
    result = await result.json();
    setName(result.name)
  }

  const HandleUpdate = async ()=>{
   let result = await fetch(`http://localhost:3000/LEE/${params.id}`,{
    method : "put",
    body : JSON.stringify({name}),
    headers:{
      'Content-Type' : 'application/json'
    }
   })
    result = await result.json();
    console.log(result)
    navigate('/')
  }
    return (
      <>
      <h1 className='h1'>Update Todos</h1>
      <input type="text" placeholder='Enter List Item' className='inpujan' value={name} onChange={(e)=> setName(e.target.value)}/>
      <button className='buttonjan' onClick={HandleUpdate}>Update Todos</button>
      </>
    )
  }
  
  export default UpdateMenu
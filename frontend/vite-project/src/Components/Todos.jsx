import React, { useEffect, useState } from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Todos = () => {
const [name, setName] = useState('')
const [todos, setTodos] = useState([])
const params = useParams();

  const HandleAdd = () =>{
    if (!name) {
      alert("Not Empty Todos")
    }else{
      axios.post("http://localhost:3000/add", {name : name}).then(result => console.log(result)).catch(err => console.log(err))
      setName('')
    }
  }

  useEffect(()=>{
    axios.get("http://localhost:3000/get").then(result => setTodos(result.data)).catch(err => console.log(err))
  })

  const DeleteItem = (index)=>{
    axios.delete(`http://localhost:3000/delete/${index}`).then(result => console.log(result)).catch(err => console.log(err))
  }

  const DeleteAll = ()=>{
    axios.delete('http://localhost:3000/removeAll').then(result => console.log(result)).catch(err => console.log(err))
  }


  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              onChange={(e)=> setName(e.target.value)}
              value={name}
            />
              <i className='haha' onClick={HandleAdd}>➕</i>
          </div>
          {/* show our items  */}
          <div className="showItems"> 
          {
            todos.map((curElem, index)=>{
              return (
                <div className="eachItem" key={curElem._id}>
                      <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <Link className="far fa-edit add-btn" to={`/update/${curElem._id}`}>📑</Link>
                    <i className="far fa-trash-alt add-btn" onClick={()=> DeleteItem(curElem._id)}>🗑</i>
                  </div> 
                </div>
              )
            })
          }  
          </div>

          {/* rmeove all button  */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={DeleteAll}
              >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todos

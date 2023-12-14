import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();//page will not reload for this
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }

    return (
        <>
        <div className="container my-3">
        <h3 className="text-primary">Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Todo Title</label>
                    <input type="text" value={title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter todo title" onChange={(e)=>{setTitle(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Todo Description</label>
                    <input type="text" value={desc} className="form-control" id="exampleInputPassword1" placeholder="Enter todo description" onChange={(e)=>{setDesc(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
            </form>
        </div>
        <hr />
        <hr />
        </>
    )
}

export default AddTodo;
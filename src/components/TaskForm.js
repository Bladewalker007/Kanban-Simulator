import React, { useState } from 'react'

export const TaskForm = ({setTaskList, taskList}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const taskHandler = (e) => {
        e.preventDefault();

        setTaskList([
            ...taskList,
            { Title: title, Description: description, Status: 'Ready', StatusID: 0, ID: Math.random() * 1000}
        ]);
        setTitle("");
        setDescription("");
    }
    return (
        <div className="formContainer">
            <form>
                <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" placeholder="Task Title" />
                <input value={description} onChange={(e) => {setDescription(e.target.value)}} type="text" placeholder="Task Description" />
                <button onClick={taskHandler} type="submit">Submit Task</button>
            </form>
        </div>
    )
}

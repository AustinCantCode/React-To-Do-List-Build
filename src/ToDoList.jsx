import React, { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["Do a 5km run in the Park","Complete the Math Homework","Start learning React <3"]);
    const[newTask, setNewTasks] = useState("");

    const enterKeyClicked = (event) => {
        if (event.key === "Enter") {
          addTask();
        }
      };

    function handleInputChange(event){
        setNewTasks(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...tasks, newTask]);
        setNewTasks("")
        } else (
            window.alert("Please enter a Task!")
        )
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index);
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }
    
    return (
     
<div className="background">
<div className="to-do-list"> 
<title>({tasks.length}) To-Do List</title>
<h1>To-Do List</h1> 
<h2 style={{color: "hsl(260, 20%, 40%)"}}>Made with <span style={{color: "hsl(335, 100%, 60%)"}}>React</span></h2>
<div>
<div className="input-container">
  <input 
    type="text"
    placeholder="Enter a Task..."
    value={newTask}
    onChange={handleInputChange}
    onKeyDown={enterKeyClicked}
    maxLength={50}
  />
  <span className="characterCount">
    {newTask.length}/50
  </span>
</div>

<button className="add-button" onClick={addTask}>
    Add
</button>

<ol>
  {tasks.map((task, index) => (
    <li key={index} className="task-item">
      <span className="text">
        <div className="index">{index + 1}</div>
        <div className="task-name">{task}</div>
      </span>
      <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
      <button className="move-button" onClick={() => moveTaskDown(index)}>↓</button>
      <button className="move-button" onClick={() => moveTaskUp(index)}>↑</button>
    </li>
  ))}
</ol>
</div>
</div>
    </div>)
  }
  
  export default ToDoList
  
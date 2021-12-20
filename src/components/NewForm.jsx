import {useState, useContext, useEffect} from 'react'
import Card from "./shared/Card"
import { div } from 'prelude-ls'
import '../input.css'
import '../index.css'
import TaskContext from '../context/TaskContext'




function NewForm() {
    const [desc, setDesc] = useState('')
    const {addTask, task, setTask} = useContext(TaskContext)

    const handleTextChange = (event) =>{
        setDesc(event.target.value)
       
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: `${task.length +1}` ,
            // id: parseInt(`${task.length + 1}`),
            desc
        }
        
        addTask(newTask)
        setDesc('')
    }   
    


    return ( 
        <Card>
            <form onSubmit={handleSubmit}className="new-form">
                <h2 className="form-title">Create a New Task</h2>
                <input type="text"  onChange={handleTextChange} value={desc}/>
                <button className="form-btn" type="submit"  >Add Task</button>
            </form>
        </Card>
    )
}


export default NewForm

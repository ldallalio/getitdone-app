import {useContext} from 'react'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import '../index.css'
import '../input.css'
import TaskContext from '../context/TaskContext'


function TaskItem({task, item}) {
        const {deleteTask} = useContext(TaskContext)
        return (

                    <div className='task-desc'>
                        <h2 className='task-id'>{task.id}</h2>
                        <p>{task.desc}</p>
                       <button onClick={() => {
                        {deleteTask(task.id)}
                       }}>
                       <FaTimes color='purple'/>        
                       </button>
                                
                        
                </div>
                

                
        )
    
        
    
    
}

export default TaskItem

import {useState} from 'react'
import PropTypes from 'prop-types'
import '../index.css'
import '../input.css'
import Card from './shared/Card'
import TaskContext from '../context/TaskContext'
import Message from './shared/Message'


function TaskItem({task}) {


        return (
            <Card>
                <h2 className='task-id'>{task.id}</h2>
                <p className='task-desc'>{task.desc}</p>
            </Card>

        )
    
        
    
    
}

export default TaskItem

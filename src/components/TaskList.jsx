import {useContext} from 'react'
import TaskItem from '../components/TaskItem'
import TaskContext from '../context/TaskContext'
import Card from './shared/Card'


function TaskList() {
    const {task} = useContext(TaskContext)

    
        
    


    if(task === undefined || task.length < 1){
        return  (
                 <Card>
                    <h1 className='messageText'>
                         No Availabe Tasks
                    </h1>
                 </Card>
             )
     }

     
    return (


        <div>{
           task.map((task) => (
            <TaskItem 
            key={task.id}
            task={task}
            />
         ))}
        </div>
    )
}

export default TaskList

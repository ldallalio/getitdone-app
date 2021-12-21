import {useContext} from 'react'
import TaskItem from '../components/TaskItem'
import TaskContext from '../context/TaskContext'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'


function TaskList() {
    const {deleteTask,task} = useContext(TaskContext)

    if(task === undefined || task.length < 1){
        return  (
                 <Card>
                    <h1 className='messageText'>
                         No Availabe Tasks
                    </h1>
                 </Card>
             )
     }

     // SORTS ID IN ASCENDING ORDER

     function compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
          const comparison = a[key].localeCompare(b[key]);
      
          return (
            (order === 'desc') ? (comparison * -1) : comparison
          );
        };
      }
      task.sort(compareValues('id'))

    return (
        <Card>
          {task.map((task) => (
            <TaskItem 
            key={task.id}
            task={task}
            />
            ))
        
            }


        </Card>
    )
}

export default TaskList

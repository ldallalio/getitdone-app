import {createContext, useState} from 'react'

 const TaskContext = createContext()

 export const TaskProvider = ({children}) => {
    //State//
    const [task, setTask] = useState([
         
/*             {
                id: 1,
                desc: "this is my title"
            } */

        
    ])
    //Functions//
    //Add Task
    const addTask =  (newTask) => {
        const data = newTask
        setTask([data, ...task])
    }
//Delete Task
const deleteTask= (id) => {
        setTask(task.filter((item) => item.id !== id))
        let newArr = {...task}
        console.log(newArr[0].id)
    
}
     return <TaskContext.Provider value={{
    //Add the propes we are using
         task,
         addTask,
         setTask,
         deleteTask
     }}>
         {children}
     </TaskContext.Provider>
     
 }

 export default TaskContext
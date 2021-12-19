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
    //Add Feedback
    const addTask =  (newTask) => {
        const data = newTask
        console.log(data)
        setTask([data, ...task])
    }
    
     return <TaskContext.Provider value={{
    //Add the propes we are using
         task,
         addTask,
         setTask
     }}>
         {children}
     </TaskContext.Provider>
     
 }

 export default TaskContext
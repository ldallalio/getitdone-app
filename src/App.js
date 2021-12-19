import { TaskProvider } from './context/TaskContext'
import Header from "./components/Header";
import NewForm from "./components/NewForm";
import TaskItem from "./components/TaskItem";
import TaskList from './components/TaskList';


function App() {
  
    return (
      <TaskProvider>
        <div className="App">
          <Header/>
          <NewForm/>
          <TaskList/>
        </div>
        </TaskProvider>
      );
  
  
}

export default App;

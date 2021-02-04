import './App.css';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.js'

function App() {

   const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ]);

   const deleteTask = id => {
      setTasks(tasks.filter(task => task.id !== id))
   }

   const toggleReminder = (id) => {
      setTasks(
         tasks.map(task => task.id ===id ? {...task, reminder: !task.reminder} : task)
      )
   }

   const addTask = (text, day, reminder) => {
      const task = {
         id: tasks[tasks.length-1].id+1,
         text: text,
         day: day,
         reminder: reminder
      }
      setTasks([...tasks, task]);
   }
  return (
    <div className="container">
      <Header/>
      <AddTaskForm onAdd={addTask}></AddTaskForm>
      {tasks.length ? <TaskContainer tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'There are no tasks to show'}
    </div>
  );
}

export default App;

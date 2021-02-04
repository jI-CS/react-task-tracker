import Task from './Task';

const TaskContainer = ({tasks, onDelete, onToggle}) => {

   return (
      <>
         {tasks.map(task => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> 
         ))}
      </>
   )
}

export default TaskContainer

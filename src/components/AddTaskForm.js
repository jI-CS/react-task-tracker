import { useState } from 'react';

const AddTaskForm = ({onAdd}) => {

   const [taskText, setTaskText] = useState('');
   const [taskDay, setTaskDay] = useState('');
   const [reminder, setReminder] = useState(false);

   const onSubmit = e => {
      e.preventDefault();
      onAdd(taskText, taskDay, reminder)
   }
   return (
      <form className="add-form">
         <div className="form-control">
            <label htmlFor="">Task</label>
            <input type="text" placeholder="Add task" value={taskText} onChange={(e) => {setTaskText(e.target.value)}}/>
         </div>
         <div className="form-control">
            <label htmlFor="">Day & time</label>
            <input type="date" placeholder="Pick a date" value={taskDay} onChange={(e) => {setTaskDay(e.target.value)}}/>
         </div>
         <div className="form-control form-control-check">
            <label htmlFor="">Set reminder</label>
            <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
         </div>
         <input type="submit" value="Save task" className="btn btn-block" onClick={onSubmit}/>
      </form>
   )
}

export default AddTaskForm

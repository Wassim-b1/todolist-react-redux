import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, updateTask } from './actions';

const TodoApp = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState({ id: null, value: '' });

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
      setNewTask('');
    }
  };

  const startEdit = (id, value) => {
    setEditedTask({ id, value });
  };

  const updateCurrentTask = () => {
    if (editedTask.value.trim() !== '') {
        const confirmation = window.confirm('Do you want to update this task?');
        if(confirmation){
            dispatch(updateTask(editedTask.id, editedTask.value));
            setEditedTask({ id: null, value: '' });
        }else{
            setEditedTask({ id: null, value: '' });
          }
        
    }
  };

  return (
    <div className='container'>

      <h1>To-Do List Using React Redux</h1>

      <div className="content">

        <div className="typing">
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add a new task" />
            <button onClick={addNewTask}>Add Task</button>
        </div>

        <ul>
                {tasks.map((task, index) => (
                <li key={index}>
                    {editedTask.id === index ? (
                    <div className='editText'>
                        <input
                        type="text"
                        value={editedTask.value}
                        onChange={(e) =>
                            setEditedTask({ ...editedTask, value: e.target.value })
                        }
                        />
                        <button onClick={updateCurrentTask}>Update</button>
                    </div>
                    ) : (
                        <div className="view">
                            <div className="text">
                                {task}
                            </div>
                            <div className='buttons'>
                                <button className='edit' onClick={() => startEdit(index, task)}>Edit</button>
                                <button className='delete' onClick={() => dispatch(deleteTask(index))}>Delete</button>
                            </div>
                        </div>
                    
                    )}
                </li>
                ))}
            </ul>




      </div>


      
      
    </div>
  );
};

export default TodoApp;
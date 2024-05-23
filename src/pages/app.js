import React, { useState, useEffect } from 'react';
import TaskList from '../components/taskList/taskList';
import AddTaskForm from '../components/addTaskForm/addTaskForm';
import TaskCounter from '../components/taskCounter/taskCounter';
// import './App.css'; // Import CSS file if needed

function App() {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const addTask = (name, description) => {
        const newTask = { id: Date.now(), name, description };
        setTasks([...tasks, newTask]);
        setShowForm(false);
    };

    const editTask = (id, newName, newDescription) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, name: newName, description: newDescription } : task
        ));
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="App">
            <h1>Inbox</h1>
            <TaskCounter count={tasks.length} />
            <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
            <button onClick={toggleForm}>
                <svg width="20" height="20">
                    <use xlinkHref="#add-icon" />
                </svg>
            </button>
            <button onClick={toggleForm}>
                Add task
            </button>
            {showForm && <AddTaskForm addTask={addTask} toggleForm={toggleForm} />}
        </div>
    );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import TaskList from '../components/TaskList/TaskList';
// import AddTaskForm from '../components/AddTaskForm/AddTaskForm';
// import TaskCounter from '../components/TaskCounter/TaskCounter';
// import { fetchTasks, createTask, updateTask, deleteTask } from '../services/api';

// function App() {
//     const [tasks, setTasks] = useState([]);

//     useEffect(() => {
//         const loadTasks = async () => {
//             try {
//                 const fetchedTasks = await fetchTasks();
//                 console.log(fetchedTasks); // Kiểm tra dữ liệu trả về từ fetchTasks
//                 setTasks(fetchedTasks);
//             } catch (error) {
//                 console.error('Fetch Tasks Error:', error);
//             }
//         };
//         loadTasks();
//     }, []);

//     const removeTask = async (id) => {
//         try {
//             await deleteTask(id);
//             setTasks(tasks.filter(task => task.id !== id));
//         } catch (error) {
//             console.error('Delete Task Error:', error);
//         }
//     };

//     const addTask = async (name, description) => {
//         try {
//             const newTask = await createTask({ name, description });
//             console.log(newTask); // Kiểm tra dữ liệu trả về từ createTask
//             setTasks([...tasks, newTask]);
//         } catch (error) {
//             console.error('Create Task Error:', error);
//         }
//     };

//     const editTask = async (id, newName, newDescription) => {
//         try {
//             await updateTask(id, { name: newName, description: newDescription });
//             setTasks(tasks.map(task =>
//                 task.id === id ? { ...task, name: newName, description: newDescription } : task
//             ));
//         } catch (error) {
//             console.error('Update Task Error:', error);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Inbox</h1>
//             <TaskCounter count={tasks.length} />
//             <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
//             <AddTaskForm addTask={addTask} />
//         </div>
//     );
// }

// export default App;

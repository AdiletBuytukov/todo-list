import {useState} from 'react'
import './App.css'

interface Tasks {
    text: string,
    id: string,
}

const App = () => {
    const [tasks, setTasks] = useState<Tasks[]>([
        {text: 'Выполнить ДЗ', id: '1'},
        {text: 'Украсить ёлку', id: '2'},
        {text: 'Сходить в спортзал', id: '3'},
    ]);

    const [newTaskText, setNewTaskText] = useState<string>('');

    const handleAddTask = () => {
        const newTask = {id: new Date().getTime().toString(), text: newTaskText};
        setTasks([...tasks, newTask]);
        setNewTaskText('');
    };

    const handleDeleteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div className="main-block">
            <h2>ToDo List</h2>
            <div className="input-block">
                <input
                    className="input-text"
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTask();
                        }
                    }}
                />
                <button type="button" onClick={handleAddTask}>Add</button>
            </div>
            {tasks.map((task) => (
                <div className="task-text" key={task.id}>
                    <span>{task.text}</span>
                    <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default App;

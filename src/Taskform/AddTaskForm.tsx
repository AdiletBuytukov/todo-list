import React, { useState } from 'react';

interface Props extends React.PropsWithChildren {
    text: string,
}

const AddTaskForm: React.FC<Props> = ({ onAddTask }) => {
    const [currentTask, setCurrentTask] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(e.target.value);
    };

    const handleAddClick = () => {
        onAddTask(currentTask);
    };

    return (
        <div>
            <input type="text" value={currentTask} onChange={handleInputChange} />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};

export default AddTaskForm;
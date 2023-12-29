import React, { FC } from 'react';

interface TaskProps {
    task: { id: string; text: string };
    onDeleteTask: (taskId: string) => void;
}

const Task: FC<TaskProps> = ({ task, onDeleteTask }) => {
    const textDeleteClick = () => {
        onDeleteTask(task.id);
    };

    return (
        <div>
            <span>{task.text}</span>
            <button onClick={textDeleteClick}>Delete</button>
        </div>
    );
};

export default Task;

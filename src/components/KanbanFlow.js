import React from 'react'
import TaskViewer from './TaskViewer';

export const KanbanReady = ({setTaskList, taskList}) => {
    var readyTask = [];
    readyTask = taskList.filter(el => el.Status==='Ready');

    return (
        <div className="kanbanBox">
            <div className="kanbanBoxHeader">
                Ready
            </div>
            <div className="kanbanTaskContainer">
                {readyTask.map(task => (
                    <TaskViewer task={task} taskList={taskList} setTaskList={setTaskList} key={task.ID} />
                ))}
            </div>
        </div>
    )
}
export const KanbanInProgress = ({setTaskList, taskList}) => {
    var inProgressTask = [];
    inProgressTask = taskList.filter(el => el.Status==='InProgress');
    return (
        <div className="kanbanBox">
            <div className="kanbanBoxHeader">
                In-Progress
            </div>
            <div className="kanbanTaskContainer">
                {inProgressTask.map(task => (
                    <TaskViewer task={task} taskList={taskList} setTaskList={setTaskList} key={task.ID} />
                ))}
            </div>
        </div>
    )
}
export const KanbanCompleted = ({setTaskList, taskList}) => {
    var completedTask = [];
    completedTask = taskList.filter(el => el.Status==='Completed');
    return (
        <div className="kanbanBox">
            <div className="kanbanBoxHeader">
                Completed
            </div>
            <div className="kanbanTaskContainer">
                {completedTask.map(task => (
                        <TaskViewer task={task} taskList={taskList} setTaskList={setTaskList} key={task.ID} />
                ))}
            </div>
        </div>
    )
}

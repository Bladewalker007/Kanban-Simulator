import React from 'react'


const TaskViewer = ({task, taskList, setTaskList}) => {
    const setPreviousStateHandler = (e) => {
        e.preventDefault();
        if(task.StatusID === 2){
            setTaskList(taskList.map(item => {
                if(item.ID === task.ID){
                    return {
                        ...item, StatusID: 1, Status: 'InProgress' 
                    };
                }
                return item;
            }));
        } else if(task.StatusID === 1){
            setTaskList(taskList.map(item => {
                if(item.ID === task.ID){
                    return {
                        ...item, StatusID: 0, Status: 'Ready' 
                    };
                }
                return item;
            }));
        }
    }
    const setNextStateHancler = (e) => {
        e.preventDefault();
        if(task.StatusID === 0){
            setTaskList(taskList.map(item => {
                if(item.ID === task.ID){
                    return {
                        ...item, StatusID: 1, Status: 'InProgress' 
                    };
                }
                return item;
            }));
        } else if(task.StatusID === 1){
            setTaskList(taskList.map(item => {
                if(item.ID === task.ID){
                    return {
                        ...item, StatusID: 2, Status: 'Completed' 
                    };
                }
                return item;
            }));
        }
    }
    const deleteTaskHandler = (e) => {
        e.preventDefault()

        setTaskList(taskList.filter(el => el.ID !== task.ID));
    }
    return (
        <div>
            <div className="taskHeader">
                {task.Title}
            </div>
            <div className="taskBody">
                {task.Description}
            </div>
            <div className="taskControls">
                <button onClick={setPreviousStateHandler} disabled={task.StatusID === 0 ? true : false}>Previous Stage</button>
                <button className="deleteButton" onClick={deleteTaskHandler}>Delete</button>
                <button onClick={setNextStateHancler} disabled={task.StatusID === 2 ? true : false}>Next Stage</button>
            </div>
        </div>
    )
}

export default TaskViewer

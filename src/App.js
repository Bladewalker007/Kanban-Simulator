import { useState } from 'react';
import './App.css';
import { KanbanCompleted, KanbanInProgress, KanbanReady } from './components/KanbanFlow';
import { TaskForm } from './components/TaskForm';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div>
      <div className="kanbanNav">
        <p>Kanban Workflow Simulator</p>
      </div>
      <div className="kanbanForm">
        <TaskForm setTaskList={setTaskList} taskList={taskList}/>
      </div>
      <div className="kanbanBacklogs">
        <KanbanReady taskList={taskList} setTaskList={setTaskList} />
        <KanbanInProgress taskList={taskList} setTaskList={setTaskList} />
        <KanbanCompleted taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default App;

import { useCallback, useEffect, useState } from "react";
import Menu from "./components/Menu";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(() => {
    const stored = sessionStorage?.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const handleTaskAdd = useCallback(() => {
    if (task.trim() === "") return;
    setTaskList((prev) => [...prev, task]);
    setTask("");
  }, [task]);

  useEffect(() => {
    window.sessionStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center pt-40 relative overflow-hidden">
      <h1 className="text-5xl pb-20">To Do List</h1>
      <Menu
        task={task}
        setTask={setTask}
        taskList={taskList}
        handleTaskAdd={handleTaskAdd}
      />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;

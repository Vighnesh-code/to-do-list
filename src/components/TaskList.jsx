const TaskList = ({ taskList }) => {
  // const taskList = JSON.parse(window.sessionStorage.getItem("tasks"));

  return (
    <div className="mt-10 w-[38.6%] max-h flex items-center scroll-smooth overflow-y-auto hide-scrollbar flex-col gap-2">
      {taskList?.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  );
};

export default TaskList;

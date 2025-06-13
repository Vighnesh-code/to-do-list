import { FaMoon } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { useState } from "react";

const Menu = () => {
  const [task, setTask] = useState("");

  return (
    <div className="flex justify-evenly w-1/2">
      <div className="flex items-center">
        <input
          type="text"
          name="task-field"
          className="rounded-md outline-none pl-2 h-9 w-[25rem] mr-2 text-black font-bold"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <FaPlusSquare className="size-9" />
      </div>
      <button className="h-10 w-16 bg-slate-300 rounded-md text-black">
        <p>All</p>
      </button>
      <button>
        <FaMoon />
      </button>
    </div>
  );
};

export default Menu;

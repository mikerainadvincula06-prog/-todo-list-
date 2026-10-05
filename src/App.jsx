import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gray-200 p-5">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="p-2 border"
          placeholder="Enter task..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-3">
          Add
        </button>
      </div>

      <div className="w-full max-w-sm">
        {list.map((item, index) => (
          <div key={index} className="flex justify-between items-center bg-white p-2 mb-2 shadow">
            <span className={item.done ? "line-through text-gray-400" : ""}>
              {item.text}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(index)}
                className="bg-green-400 px-2"
              >
                {item.done ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-400 px-2"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
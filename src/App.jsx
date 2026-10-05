const { useState } = React;

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-5 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 border p-2 rounded"
          >
            <span className={task.done ? "line-through text-gray-500" : ""}>
              {task.text}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleTask(index)}
                className="bg-green-500 text-white px-2 rounded"
              >
                {task.done ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
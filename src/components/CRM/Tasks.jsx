const Tasks = () => {
    const tasks = [
      { id: 1, title: "Follow up with John", dueDate: "2024-12-01" },
      { id: 2, title: "Prepare invoice for Jane", dueDate: "2024-12-05" },
    ];
  
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Tasks</h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">Due: {task.dueDate}</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Tasks;
  
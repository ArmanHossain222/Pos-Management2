const Overview = () => {
    const stats = {
      customers: 120,
      tasks: 15,
      completedTasks: 40,
      revenue: "$12,000",
    };
  
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-600">Customers</h3>
            <p className="text-2xl font-bold">{stats.customers}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-green-600">Tasks</h3>
            <p className="text-2xl font-bold">{stats.tasks}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-yellow-600">
              Completed Tasks
            </h3>
            <p className="text-2xl font-bold">{stats.completedTasks}</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-purple-600">Revenue</h3>
            <p className="text-2xl font-bold">{stats.revenue}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Overview;
  
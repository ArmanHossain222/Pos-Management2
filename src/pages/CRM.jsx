
import Overview from "../components/CRM/Overview";
import CustomerList from "../components/CRM/CustomerList";
import Tasks from "../components/CRM/Tasks";
import Reports from "../components/CRM/Reports";
import AddCustomer from "../components/CRM/AddCustomer";


const CRM = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Page Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">CRM Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Manage your customers, track tasks, and view reports from a single
          interface.
        </p>
      </div>

      {/* AddCustomer */}
      <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">CRM Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage customers and track activities efficiently.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Add Customer Section */}
        <AddCustomer />

        {/* Additional Sections */}
        {/* Add other components here */}
      </div>
    </div>

      {/* Grid Layout for Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Overview />
        <CustomerList />
        <Tasks />
        <Reports />
      </div>
    </div>
  );
};

export default CRM;

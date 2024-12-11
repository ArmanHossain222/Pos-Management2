import POS from "../components/POS";
import SalesSummary from "../components/SalesSummary";

const Sales = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Page Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Sales Management</h1>
        <p className="text-gray-600 mt-2">
          Track and manage your sales efficiently. Use the POS system to process
          transactions and review recent sales below.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* POS Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Point of Sale</h2>
          <POS />
        </div>

        {/* Sales Summary Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sales Summary</h2>
          <SalesSummary />
        </div>
      </div>
    </div>
  );
};

export default Sales;

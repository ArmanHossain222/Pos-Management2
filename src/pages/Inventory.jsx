import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const Inventory = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Page Title */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Inventory Management</h1>
        <p className="text-gray-600 mt-2">
          Manage medicines in your inventory efficiently. Add, update, or remove products as needed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add Product Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Product</h2>
          <AddProduct />
        </div>

        {/* Product List Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Product List</h2>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Inventory;

const AddProduct = () => {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 font-bold">Product Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter product name"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold">Category</label>
        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select category</option>
          <option value="tablet">Tablet</option>
          <option value="syrup">Syrup</option>
          <option value="ointment">Ointment</option>
          <option value="ointment">Cream</option>
          <option value="ointment">Injection</option>
          <option value="ointment">Salain</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-bold">Generic</label>
        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Generic</option>
          <option value="tablet">paracetamol</option>
          <option value="syrup">azithromycin</option>
          <option value="ointment">omeprazole</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-bold">Price</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter price"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold">Stock Quantity</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter stock quantity"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProduct;

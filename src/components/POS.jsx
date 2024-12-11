const POS = () => {
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
        <label className="block text-gray-700 font-bold">Quantity</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter quantity"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold">Price</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter price"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Add to Sale
      </button>
    </form>
  );
};

export default POS;
